export function toObj(array) {
  if (Array.isArray(array)) {
    if (array.length > 0) {
      for (let i = 0; i < array.length; i++) {
        for (const key in array[i]) {
          //Boolean
          array[i][key] = array[i][key] === 'Y' ? true : array[i][key] === 'N' ? false : array[i][key]
          //url
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
