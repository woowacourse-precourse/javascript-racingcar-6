import { MissionUtils } from "@woowacourse/mission-utils";
import calculate from "./calculate.js";

const race = (player, userAttempts) => {
  let results = {};

  MissionUtils.Console.print("실행 결과");
  for (let i = 1; i <= userAttempts; i++) {
    calculate(player, results);
  }
  return results;
};

export default race;
