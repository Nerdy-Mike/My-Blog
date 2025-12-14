---
title: 'Reverse Engineering Better Auth: Building a Password Compatibility Layer'
date: '2025-12-14'
category: 'Technical'
tags: ['authentication', 'migration', 'security', 'open-source', 'typescript']
draft: false
summary: 'How I reverse-engineered Better Auth’s password hashing to build a framework-agnostic compatibility package, saving hours of migration headaches for developers moving between authentication systems.'
layout: PostLayout
---

# Reverse Engineering Better Auth: Building a Password Compatibility Layer

*How I reverse-engineered Better Auth's password hashing to build a framework-agnostic compatibility package, saving hours of migration headaches for developers moving between authentication systems.*

## The Migration That Broke Everything

I had just finished migrating my application from Better Auth to NestJS. The database migration was smooth, the API routes were working, and I was feeling pretty good about the whole process. Then I tried to log in.

**Invalid credentials.**

I tried again. Same error. I checked the database - the user existed. I checked the password hash - it was there. I checked my authentication code - it looked correct. But nothing worked.

This is when I realized I had a problem. A big one. All my existing users couldn't log in because their password hashes were incompatible with standard Node.js password hashing methods.

## The Investigation: Why Nothing Worked

Better Auth uses a specific password hashing implementation that isn't immediately obvious from the documentation. When I tried to verify existing passwords using Node.js's built-in `crypto.scrypt`, nothing worked. I tried every combination I could think of:

```typescript
// None of these worked!
scrypt(password, salt, 64)
scrypt(password, Buffer.from(salt, 'hex'), 64)
scrypt(password + SECRET, salt, 64)
scrypt(SECRET + password, salt, 64)
// ... and many more variations
```

Hours of debugging later, I discovered the issue: Better Auth uses `@noble/hashes/scrypt`, which is a pure JavaScript implementation with different behavior than Node.js's native scrypt. The parameters and salt handling are also specific.

Here's what I found after digging through Better Auth's source code:

- **Algorithm**: `@noble/hashes/scrypt` (not Node.js `crypto.scrypt`)
- **Parameters**: N=16384, r=16, p=1, dkLen=64
- **Format**: `salt:hash` (both hex-encoded)
- **Normalization**: NFKC Unicode normalization
- **Salt**: 16 random bytes (32 hex characters)

The subtle differences matter:
- **`@noble/hashes/scrypt` vs `crypto.scrypt`**: Different implementations produce different hashes
- **Salt format**: Better Auth uses hex-encoded strings, not Buffers
- **Unicode normalization**: Ensures passwords like "café" and "cafe\u0301" hash the same way
- **Parameter values**: Even small differences in N, r, or p values break compatibility

## Building the Solution

After spending hours reverse-engineering Better Auth's implementation and testing various approaches, I had a working solution. But I realized this wasn't just my problem - anyone migrating from Better Auth would face the same challenge.

So I extracted the solution into a standalone, framework-agnostic npm package: **`@better-auth-compat/password`**.

### The Core Implementation

The package implements Better Auth's exact password hashing algorithm:

```typescript
import { PasswordService } from '@better-auth-compat/password';

const passwordService = new PasswordService();

// Hash a password (creates Better Auth compatible hash)
const hash = await passwordService.hashPassword('myPassword123!');
// Returns: "ff2260be96728d140332e138d81e9aea:f357208a8eb032d1759b4865b5d29aeab22ecf55138dfd5360301e2dc832c34547bb8cdf603004c875c966064a0e330c5cbc3dc27ac346fe09b6b91c644e1255"

// Verify a password (works with existing Better Auth hashes)
const isValid = await passwordService.verifyPassword('myPassword123!', hash);
// Returns: true
```

### Key Technical Details

**1. Uses `@noble/hashes/scrypt` (Not Node.js crypto)**

The critical difference is using the same library Better Auth uses:

```typescript
// Dynamic import to support both ESM and CommonJS
const { scrypt } = await import('@noble/hashes/scrypt.js');
```

**2. Exact Scrypt Parameters**

Getting the parameters right was crucial - even small differences break compatibility:

```typescript
const SCRYPT_PARAMS = {
  N: 16384,      // CPU/memory cost (2^14)
  r: 16,         // Block size
  p: 1,          // Parallelization
  dkLen: 64,     // Key length in bytes
  maxmem: 128 * 16384 * 16 * 2, // 64 MB memory limit
};
```

**3. Unicode Normalization**

This was one of the trickier parts to get right:

```typescript
// Critical for password compatibility
const normalizedPassword = password.normalize('NFKC');
```

**4. Constant-Time Comparison**

Security matters, so I implemented constant-time comparison to prevent timing attacks:

```typescript
// Prevents timing attacks
private constantTimeEqual(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false;
  let c = 0;
  for (let i = 0; i < a.length; i++) {
    c |= a[i] ^ b[i];
  }
  return c === 0;
}
```

## Real-World Use Cases

### 1. Framework Migration

This was my original use case - migrating from Better Auth to NestJS:

```typescript
// In your new NestJS backend
import { PasswordService } from '@better-auth-compat/password';

@Injectable()
export class AuthService {
  private passwordService = new PasswordService();

  async login(email: string, password: string) {
    const user = await this.findUserByEmail(email);
    
    // Verify password against existing Better Auth hash
    const isValid = await this.passwordService.verifyPassword(
      password,
      user.passwordHash
    );
    
    if (isValid) {
      // User can log in with their existing password!
      return this.createSession(user);
    }
    
    throw new UnauthorizedException('Invalid credentials');
  }
}
```

### 2. Multi-Framework Support

You can use Better Auth password hashing in frameworks that don't support Better Auth:

```typescript
// Next.js API Route
import { PasswordService } from '@better-auth-compat/password';

export default async function handler(req, res) {
  const passwordService = new PasswordService();
  const hash = await passwordService.hashPassword(req.body.password);
  // Store hash in database
}
```

### 3. Gradual Migration

Gradually migrate users while maintaining compatibility:

```typescript
// New passwords use your new system
// Old passwords still work with Better Auth compatibility
const isValid = await passwordService.verifyPassword(password, oldHash);
if (isValid) {
  // Migrate to new hash format on next password change
  const newHash = await newPasswordService.hashPassword(password);
}
```

## Security Considerations

The package maintains Better Auth's security standards:

✅ **Constant-time comparison** - Prevents timing attacks  
✅ **Cryptographically secure random salts** - Each password gets a unique salt  
✅ **High scrypt cost parameters** - N=16384 provides strong security  
✅ **Unicode normalization** - Prevents encoding-based attacks  
✅ **No side effects** - Library doesn't log errors or expose sensitive data  

## Package Features

- ✅ **100% Better Auth Compatible** - Hashes created by Better Auth work perfectly
- ✅ **Framework Agnostic** - Works with any Node.js framework
- ✅ **TypeScript Support** - Full type definitions included
- ✅ **Zero Dependencies** - Only depends on `@noble/hashes`
- ✅ **Dual Module Support** - Works with both ESM and CommonJS
- ✅ **Well Tested** - 18 comprehensive tests covering all edge cases

## Getting Started

Installation is simple:

```bash
npm install @better-auth-compat/password
```

Basic usage:

```typescript
import { PasswordService } from '@better-auth-compat/password';

const passwordService = new PasswordService();

// Hash a new password
const hash = await passwordService.hashPassword('securePassword123!');

// Verify a password (works with Better Auth hashes)
const isValid = await passwordService.verifyPassword('securePassword123!', hash);

// Optional: Validate password strength
const validation = passwordService.validatePasswordStrength('weak');
if (!validation.isValid) {
  console.log(validation.errors);
}
```

## The Impact

This package solves a real problem for developers:

1. **No Password Resets Required** - Users keep their existing passwords during migration
2. **Seamless Migration** - Move between frameworks without breaking authentication
3. **Community Benefit** - Others facing the same challenge can use this solution
4. **Maintainability** - Centralized, well-tested implementation

## Lessons Learned

Building this package taught me several important lessons:

### 1. Documentation Matters

Better Auth's password hashing wasn't well-documented, leading to hours of reverse engineering. This experience reinforced the importance of clear documentation for library authors.

### 2. Compatibility is Hard

Small implementation differences can break everything. What seems like a minor detail (like using hex-encoded strings vs Buffers) can completely break password verification.

### 3. Open Source Helps

Sharing solutions benefits the entire community. What started as solving my own problem became a package that could help others avoid the same frustration.

### 4. Testing is Critical

18 tests ensure compatibility across edge cases. Without comprehensive testing, I would have missed subtle bugs that would have broken password verification in production.

## Future Plans

This is just the beginning. Future plans include:

- **NestJS Integration Package** - Full NestJS module with guards and decorators
- **Drizzle ORM Adapters** - Schema definitions and type-safe helpers
- **Additional Framework Integrations** - Express, Fastify, and more

## Conclusion

Migrating between authentication systems shouldn't break user authentication. `@better-auth-compat/password` bridges the gap, allowing seamless migration from Better Auth to any Node.js framework while maintaining 100% password compatibility.

Whether you're migrating frameworks, building a custom auth system, or need Better Auth compatibility in a different environment, this package has you covered.

**Try it today:**
```bash
npm install @better-auth-compat/password
```

**GitHub Repository:** [GM-MikeLe/better-auth-compat](https://github.com/GM-MikeLe/better-auth-compat)

**npm Package:** [@better-auth-compat/password](https://www.npmjs.com/package/@better-auth-compat/password)

---

*Have you faced similar migration challenges? Share your experience or contribute to the project on GitHub!*
