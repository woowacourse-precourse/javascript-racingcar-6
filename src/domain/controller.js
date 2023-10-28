import { MissionUtils } from '@woowacourse/mission-utils';

export const makeRandomNumberAndJudge = async (tryNumber) => {
  const RANDOM_NUMBER_ARRAY = [];
  for (let i = 0; i < tryNumber; i++) {
    const NUMBER = await MissionUtils.Random.pickNumberInRange(0, 9);
    NUMBER >= 4 ? RANDOM_NUMBER_ARRAY.push(NUMBER) : RANDOM_NUMBER_ARRAY.push(0);
  }
  return RANDOM_NUMBER_ARRAY;
};

export const makeEmptyArray = (carNamesArray, array) => {
  for (let i = 0; i < carNamesArray.length; i++) {
    array.push([]);
  }
};

export const resultJudge = (result, countArr, i, j) => {
  if (result[j][i] != 0) {
    countArr[j].push('-');
  }
};

export const finalWinnerResultAndSort = (result, carNamesArray, countArr) => {
  for (let i = 0; i < carNamesArray.length; i++) {
    result.push([carNamesArray[i], countArr[i]]);
  }
  result = result.sort((a, b) => b[1] - a[1]);
};

export const makeWinnerArrayAndJoin = (winners, result, k) => {
  for (let i = 0; i <= k; i++) {
    winners.push(result[i][0]);
  }
};

export const howManyFirstCars = (result, k) => {
  for (let i = 0; i < result.length - 1; i++) {
    if (result[i][1] !== result[i + 1][1]) {
      k = i;
      break;
    }
  }
};
