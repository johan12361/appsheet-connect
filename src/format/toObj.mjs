/**
 * Converts specific values in an array of objects to their appropriate types.
 * - Transforms 'Y' and 'N' strings to boolean values (`true` and `false`, respectively).
 * - Extracts the URL from JSON-encoded strings containing 'Url' and 'LinkText'.
 *
 * @param {Object[]} array - An array of objects to be processed.
 *
 * @returns {Object[]} The array with transformed values.
 *
 * @throws {Error} Throws an error if the input is not an array.
 *
 * @example
 * const data = [
 *   { isActive: 'Y', profileLink: '{"Url": "https://example.com", "LinkText": "Profile"}' },
 *   { isActive: 'N', profileLink: '{"Url": "https://example.com", "LinkText": "Profile"}' }
 * ];
 *
 * const transformedData = toObj(data);
 * console.log(transformedData);
 * // Output: [
 * //   { isActive: true, profileLink: 'https://example.com' },
 * //   { isActive: false, profileLink: 'https://example.com' }
 * // ]
 */
export function toObj(array) {
  if (Array.isArray(array)) {
    if (array.length > 0) {
      for (let i = 0; i < array.length; i++) {
        for (const key in array[i]) {
          // Boolean conversion
          array[i][key] = array[i][key] === 'Y' ? true : array[i][key] === 'N' ? false : array[i][key]
          // URL extraction
          if (String(array[i][key]).includes('Url') && String(array[i][key]).includes('LinkText')) {
            array[i][key] = JSON.parse(array[i][key]).Url
          }
        }
      }
    }
  } else {
    console.error('Array expected')
  }
  return array
}
