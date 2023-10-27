/**
 * @param {string} input
 **/
export function isUserInputValid(input) {
  if (isIncludeSpace(input)) {
    throw new Error('[ERROR] 입력에 공백을 제거 해주세요.');
  }
  if (!isInputValid(input)) {
    throw new Error('[ERROR] 유요하지 않은 입력입니다. 다시시도해 주세요.');
  }
}

/**
 * @param {string} input
 * */
function isIncludeSpace(input) {
  return input.includes(' ');
}

function isInputValid(input) {
  const regex = /^([a-zA-Z]{1,5})(,[a-zA-Z]{1,5})*$/;
  return regex.test(input);
}

/**
 * @param {string} input
 * */
export function splitCarsInput(input) {
  const cars = input.split(',');
  carsOverLimitNumber(cars);
  isNameDuplicate(cars);
  return cars;
}

function carsOverLimitNumber(arr) {
  if (arr.length > 10) {
    throw new Error('[ERROR] 차 수가 10개를 넘어가지 않도록 해주세요.');
  }
}

/**
 * @param {string[]} arr
 * */
function isNameDuplicate(arr) {
  const originLength = arr.length;
  const set = new Set([...arr]);
  if (originLength !== set.size) {
    throw new Error('[ERROR] 차 이름은 중복될 수 없습니다.');
  }
}

/**
 * @param {string} input
 * */
export function checkIsValidNumber(input) {
  const numberedInput = Number(input);
  if (isNaN(numberedInput)) throw new Error('[ERROR] 숫자를 입력해 주세요.');
  if (numberedInput > 50) {
    throw new Error('[ERROR] 50 이하의 수를 입력해 주세요.');
  }
}
