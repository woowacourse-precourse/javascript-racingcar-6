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
