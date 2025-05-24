const esca = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&#39;',
  '"': '&quot;',
}
const pe = (m) => esca[m]

const ca = /[&<>'"]/g

/**
 * Safely escape HTML entities such as `&`, `<`, `>`, `"`, and `'`.
 * @param {string} str the input to safely escape
 * @returns {string} the escaped input, and it **throws** an error if
 *  the input type is unexpected, except for boolean and numbers,
 *  converted as string.
 */
export const escape = (str) => {
  if (str === null || str === undefined) {
    return ''
  }
  return String(str).replace(ca, pe)
}
