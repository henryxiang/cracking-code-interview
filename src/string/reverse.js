/** @module */

/**
 * Reverse a string
 * @param {string} input string
 * @returns {string} output string 
 */
function reverse(s) {
  if (s === null || s === undefined) {
    return null;
  }
  return  s.split('').reverse().join('');
}

export default reverse;
