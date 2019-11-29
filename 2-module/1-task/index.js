/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
  let copyObj = {};
  for (let key in obj) {
    copyObj[key] = obj[key];
  }
  return copyObj;
}
