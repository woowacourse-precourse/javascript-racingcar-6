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
};

MissionUtils.Console.print(TEXT.ENTER);
MissionUtils.Console.print(TEXT.RACING_RESULT);
for (let i = 0; i < tryNumber; i++) {
  for (let j = 0; j < RESULT.length; j++) {
    resultJudge(RESULT, countArr, i, j);
    racingProgressPrint(carNameArray, countArr, j);
  }
  MissionUtils.Console.print("");
}
