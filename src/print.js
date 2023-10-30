import { MissionUtils } from "@woowacourse/mission-utils";

const SCORE_STRING = "-";

export function printResult(racingObj) {
  Object.keys(racingObj).forEach((key) => {
    MissionUtils.Console.print(key + " : " + repeatString(racingObj[key]));
  });
  MissionUtils.Console.print("");
}

function repeatString(score) {
  return SCORE_STRING.repeat(score);
}
