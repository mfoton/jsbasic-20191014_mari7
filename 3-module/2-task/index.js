/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(string) {
  const reg = /[^0-9-. ]+/gi;
  let arr = string.replace(reg, "").split(' ');
  let min = 0;
  let max = 0;
  let start = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "" && isFinite(arr[i])) {
      min = +arr[i];
      max = +arr[i];
      start = i;
      break;
    }
  }

  for (let i = start; i < arr.length; i++) {
    if (arr[i] !== "" && isFinite(arr[i])) {
      if (+arr[i] < min) min = +arr[i];
      if (+arr[i] > max) max = +arr[i];
    }
  }

  return [min, max];
}

console.log(getMinMax(inputData)); // ожидается [-5.8, 73]
