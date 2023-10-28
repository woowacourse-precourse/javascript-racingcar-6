import { MissionUtils } from '@woowacourse/mission-utils';
import { howManyFirstCars, makeWinnerArray } from './controller.js';
import { TEXT } from '../constants/constant.js';

export const racingProgressPrint = (carNamesArray, countArr, j) => {
  MissionUtils.Console.print(carNamesArray[j] + ' : ' + countArr[j].join('').trim());
};

export const winnerIsOnePrint = (result) => {
  MissionUtils.Console.print(TEXT.FINAL_WINNER + result[0][0]);
  return;
};

export const winnerIsManyPrint = async (result) => {
  let k = 0;
  let winners = [];
  k = howManyFirstCars(result, k);
  makeWinnerArray(winners, result, k);
  winners = winners.join(', ');
  MissionUtils.Console.print(TEXT.FINAL_WINNER + winners);
  return;
};

export const winnerIsAllPrint = async (result) => {
  let winners = [];
  makeWinnerArray(winners, result, result.length - 1);
  winners = winners.join(', ');
  MissionUtils.Console.print(TEXT.FINAL_WINNER + winners);
  return;
};
