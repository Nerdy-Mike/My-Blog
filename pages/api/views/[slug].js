import fs from 'fs'
import path from 'path'

const VIEWS_FILE = path.join(process.cwd(), 'data', 'views.json')

// Ensure views.json exists
function ensureViewsFile() {
  try {
    if (!fs.existsSync(VIEWS_FILE)) {
      const dataDir = path.dirname(VIEWS_FILE)
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true })
      }
      fs.writeFileSync(VIEWS_FILE, JSON.stringify({}))
    }
  } catch (error) {
    console.error('Error ensuring views file:', error)
  }
}

// Read views from file
function readViews() {
  try {
    ensureViewsFile()
    const data = fs.readFileSync(VIEWS_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading views:', error)
    return {}
  }
}

// Write views to file
function writeViews(views) {
  try {
    ensureViewsFile()
    fs.writeFileSync(VIEWS_FILE, JSON.stringify(views, null, 2))
  } catch (error) {
    console.error('Error writing views:', error)
  }
}

export default function handler(req, res) {
  const { slug } = req.query

  if (!slug) {
    return res.status(400).json({ error: 'Slug is required' })
  }

  try {
    const views = readViews()

    if (req.method === 'GET') {
      // Get view count for a specific post
      const viewCount = views[slug] || 0
      return res.status(200).json({
        slug,
        views: viewCount,
        totalViews: Object.values(views).reduce((sum, count) => sum + count, 0),
      })
    }

    if (req.method === 'POST') {
      // Increment view count
      const { title } = req.body

      views[slug] = (views[slug] || 0) + 1
      writeViews(views)

      return res.status(200).json({
        slug,
        title,
        views: views[slug],
        message: 'View count updated successfully',
      })
    }

    // Method not allowed
    res.setHeader('Allow', ['GET', 'POST'])
    return res.status(405).json({ error: 'Method not allowed' })
  } catch (error) {
    console.error('API Error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
