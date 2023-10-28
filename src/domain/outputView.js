import { MissionUtils } from '@woowacourse/mission-utils';
import {
  finalWinnerResultAndSort,
  makeEmptyArray,
  makeRandomNumberAndJudge,
  resultJudge,
} from './controller.js';
import {
  racingProgressPrint,
  winnerIsAllPrint,
  winnerIsManyPrint,
  winnerIsOnePrint,
} from './print.js';

export const racingProgress = async (carNamesArray, tryNumber) => {
  const RESULT = [];
  let countArr = [];
  makeEmptyArray(carNamesArray, countArr);

  for (let i = 0; i < carNamesArray.length; i++) {
    RESULT.push(await makeRandomNumberAndJudge(tryNumber));
  }

  MissionUtils.Console.print('');
  MissionUtils.Console.print('실행 결과');
  for (let i = 0; i < tryNumber; i++) {
    for (let j = 0; j < RESULT.length; j++) {
      resultJudge(RESULT, countArr, i, j);
      racingProgressPrint(carNamesArray, countArr, j);
    }
    MissionUtils.Console.print('');
  }

  countArr = countArr.map((el) => (el = el.length));
  await finalWinner(carNamesArray, countArr);
};

export const finalWinner = async (carNamesArray, countArr) => {
  let result = [];
  finalWinnerResultAndSort(result, carNamesArray, countArr);
  if (result[0][1] !== result[1][1]) {
    winnerIsOnePrint(result);
  }
  if (result[0][1] === result[result.length - 1][1]) {
    winnerIsManyPrint(result);
  }
  if (result[0][1] === result[1][1]) {
    winnerIsAllPrint(result);
  }
};
