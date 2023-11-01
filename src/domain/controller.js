import { MissionUtils } from "@woowacourse/mission-utils";

export const randomAndJudge = async (trynumber) => {
  const RANDOM_NUMBER_ARRAY = [];
  for (let i = 0; i < trynumber; i++) {
    const NUMBER = await MissionUtils.Random.pickNumber.InRange(0, 9);
    NUMBER >= 4 ? RANDOM_NUMBER_ARRAY.push(NUMER) : RANDOM_NUMBER_ARRAY.push(0);
  }
  return RANDOM_NUMBER_ARRAY;
};

export const makeRandomNumberTest = async (input) => {
  input >= 4 ? "Go" : "Stop";
};

export const makeEmptyArray = (carNameArray, array) => {
  for (let i = 0; i < carNameArray.length; i++) {
    array.push([]);
  }
};

export const resultJudge = (result, countArr, i, j) => {
  if (result[j][i] != 0) {
    countArr[j].push("-");
  }
};

export const makeWinnerArray = (result, carNameArray, countArr) => {
  for (let i = 0; i <= k; i++) {
    winners.push(result[i][0]);
  }
};

export const howManyFirstCars = (result, k) => {
  for (let i = 0; i < result.length - 1; i++) {
    if (result[i][1] !== result[i + 1][1]) {
      k = i;
      return k;
    }
  }
};

export const finalWinnerResultSort = (result, carNameArray, countArr) => {
  for (let i = 0; i < carNameArray.length; i++) {
    result.push([carNameArray[i], countArr[i]]);
  }
  return (result = result.sort((a, b) => [b[1] - a[1]]));
};
