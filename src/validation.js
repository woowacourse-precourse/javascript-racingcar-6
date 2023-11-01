/**
 * 입력받은 문자열이 5자리 이하인지 판단하는 함수
 * @param {string} str
 * @returns {boolean}
 */
export const isShorterThan5Chars = (str) => {
  return str.length <= 5
}

/**
 * 입력받은 문자열 배열 중에 중복 문자열이 있는지 판단하는 함수
 * @param strings
 * @returns {boolean}
 */
export const hasDuplicateString = (strings) => {
  const length = strings.length;

  return new Set(strings).size !== length
}

/**
 * 공백만 있는 문자열인지 판단하는 함수
 *
 * @param str
 * @returns {boolean}
 */
export const isOnlySpace = (str) => {
  const regex = /^\s*$/;

  return regex.test(str);
}

/**
 * '경주할 자동차 이름 형식'에 알맞는지 판단하는 유효성 검사 함수
 * @param {string} carNamesString
 * @returns {boolean}
 */
export const isValidCarNamesString = (carNamesString) => {
  const carNames = carNamesString.split(',');
  const isEveryCarNameShorterThan5Chars = carNames.every(isShorterThan5Chars);
  if (!isEveryCarNameShorterThan5Chars) {
    throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.')
  }
  const hasSpaceName = carNames.some(isOnlySpace);
  if (hasSpaceName) {
    throw new Error('[ERROR] 공백만으로 이루어진 자동차 이름이 있습니다.')
  }
  const hasDuplicateCarName = hasDuplicateString(carNames);
  if (hasDuplicateCarName) {
    throw new Error('[ERROR] 중복된 자동차 이름이 있습니다.')
  }

  return true;
}


/**
 * 입력받은 숫자가 자연수인지 판단하는 함수
 * @param nbr
 * @returns {boolean}
 */
export const isNaturalNumber = (nbr) => {
  if (Number.isInteger(nbr) && nbr > 0) {
    return true;
  }
  return false;
}

/**
 * 입력받은 문자열이 자연수인지 판단하는 함수
 * @param count
 * @returns {boolean}
 */
export const isValidCountString = (count) => {
  if (!isNaturalNumber(Number(count))) {
    throw new Error('[ERROR] 시도할 횟수는 자연수로 입력해야 합니다.')
  }

  return true;
}