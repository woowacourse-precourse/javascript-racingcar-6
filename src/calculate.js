import { MissionUtils } from "@woowacourse/mission-utils";

const calculate = (player, results) => {
  for (let j = 0; j < player.length; j++) {
    let result = "";
    if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
      result += "-";
    }
    if (!results[player[j]]) {
      results[player[j]] = result;
    } else {
      results[player[j]] += result;
    }
    MissionUtils.Console.print(`${player[j]} : ${results[player[j]]} `);
  }
  return results;
};
export default calculate;
