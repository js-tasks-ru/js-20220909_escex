/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {

  const fieldArray = path.split('.');

  return function getObjectValue (object) {
    for (const [key, value] of Object.entries(object)) {
      if (key === fieldArray.at(-1)) {
        return value;
      } else if (value && typeof value === 'object') {
        return getObjectValue(value);
      }
    }
  };

}
