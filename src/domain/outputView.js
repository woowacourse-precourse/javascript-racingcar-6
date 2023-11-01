import { MissionUtils } from "@woowacourse/mission-utils";
import {
  finalWinnerResultSort,
  makeEmptyArray,
  makeRandomNumberTest,
  resultJudge,
} from "./controller.js";
import {
  racingProgressPrint,
  winnerIsAllPrint,
  oneWinnerPrint,
  winnerIsManyPrint,
} from "./print.js";
import { TEXT } from "../contants/contants.js";

export const racingProgress = async (carNameArray, tryNumber) => {
  const RESULT = [];
  let countArr = [];
  makeEmptyArray(carNameArray, countArr);

  for (let i = 0; i < carNameArray.length; i++) {
    RESULT.push(await makeRandomNumberTest(tryNumber));
  }
  MissionUtils.Console.print(TEXT.ENTER);
  MissionUtils.Console.print(TEXT.RACING_RESULT);
  for (let i = 0; i < tryNumber; i++) {
    for (let j = 0; j < RESULT.length; j++) {
      resultJudge(RESULT, countArr, i, j);
      racingProgressPrint(carNameArray, countArr, j);
    }
    MissionUtils.Console.print("");
  }

  countArr = countArr.map((el) => (el = el.length));
  await finalWinner(carNameArray, countArr);
};

export const finalWinner = async (carNameArray, countArr) => {
  let result = [];
  finalWinnerResultSort(result, carNameArray, countArr);
  if (result[0][1] !== result[1][1]) {
    oneWinnerPrint(result);
  } else if (result[0][1] === result[result.length - 1][1]) {
    winnerIsAllPrint(result);
  } else if (result[0][1] === result[1][1]) {
    winnerIsManyPrint(result);
  }
};
