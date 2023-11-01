import { CONFIG, ERROR_MESSAGE } from '../constants/constants';

/*
 * @param {string} carName - 자동차 이름들을 담은 문자열
 * @returns {array} carNameList - 쉼표를 기준으로 분리한 자동차 이름들을 담은 배열
 */
export const validateLength = (carName) => {
  const carNameList = carName.split(',');

  carNameList.forEach((carName) => {
    if (carName.length > CONFIG.nameMaxLength)
      throw new Error(ERROR_MESSAGE.notLengthFiveOrLess);
  });

  return carNameList;
};

/*
 * @param {string} count - 이동 횟수를 담은 문자열
 * @returns {number} moveCount - 이동 횟수를 담은 숫자
 */
export const validateIsNumber = (count) => {
  const moveCount = Number(count);

  if (Number.isNaN(moveCount))
    throw new Error(ERROR_MESSAGE.notNumberMoveCount);

  return moveCount;
};
