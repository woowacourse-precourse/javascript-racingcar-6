import { MissionUtils } from "@woowacourse/mission-utils";

const SCORE_STRING = "-";

export function printRacing(racingObj) {
  Object.keys(racingObj).forEach((key) => {
    MissionUtils.Console.print(key + " : " + repeatString(racingObj[key]));
  });
  MissionUtils.Console.print("");
}

export function printWinner(winner) {
  MissionUtils.Console.print("최종 우승자 : " + winner);
}

function repeatString(score) {
  return SCORE_STRING.repeat(score);
}
