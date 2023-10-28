import { MissionUtils } from '@woowacourse/mission-utils';
import { howManyFirstCars, makeWinnerArrayAndJoin } from './controller.js';
import { TEXT } from '../constants/constant.js';

export const racingProgressPrint = (carNamesArray, countArr, j) => {
  MissionUtils.Console.print(`${carNamesArray[j]} : ${countArr[j].join('').trim()}`);
};

export const winnerIsOnePrint = (result) => {
  MissionUtils.Console.print(TEXT.FINAL_WINNER + result[0][0]);
  return;
};

export const winnerIsManyPrint = (result) => {
  let winners = [];
  makeWinnerArrayAndJoin(winners, result, result.length - 1);
  winners = winners.join(', ');
  MissionUtils.Console.print(TEXT.FINAL_WINNER + winners);
  return;
};

export const winnerIsAllPrint = (result) => {
  let k = 0;
  let winners = [];
  howManyFirstCars(result, k);
  makeWinnerArrayAndJoin(winners, result, k);
  winners = winners.join(', ');
  MissionUtils.Console.print(TEXT.FINAL_WINNER + winners);
  return;
};
