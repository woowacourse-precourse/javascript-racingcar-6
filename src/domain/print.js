import { MissionUtils } from "@woowacourse/mission-utils";
import { TEXT } from "../contants/contants";
import { howManyFirstCars, makeWinnerArray } from "./controller";

export const racingProgressPrint = (carNameArray, countArr, j) => {
  MissionUtils.Console.print(
    carNameArray[j] + ":" + countArr[j].join("".trim())
  );
};

export const oneWinnerPrint = (result) => {
  MissionUtils.Console.print(TEXT.FINAL_WINNER + result[0][0]);
  return;
};

export const winnerIsManyPrint = async (result) => {
  let k = 0;
  let winner = [];
  k = howManyFirstCars(result, k);
  makeWinnerArray(winner, result, k);
  winners = winners.join(", ");
  MissionUtils.Console.print(TEXT.FINAL_WINNER + winners);
  return;
};

export const winnerIsAllPrint = async (result) => {
  let winners = [];
  makeWinnerArray(winners, result, result.length - 1);
  winners = winners.join(", ");
  MissionUtils.Console.print(TEXT.FINAL_WINNER + winners);
  return;
};
