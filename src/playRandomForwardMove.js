import { MissionUtils } from "@woowacourse/mission-utils";

export default function playRandomForwardMove(map) {
  //map (key: car_name, value: move)
  for (const [key, value] of map) {
    if (getRandomNum()) {
      //참 -> 전진
      map.set(key, value + 1);
    }
  }
  printRoundResult(map);
}

function printRoundResult(map) {
  for (const [key, value] of map) {
    MissionUtils.Console.print(`${key} : ` + "-".repeat(value));
  }
}

function getRandomNum() {
  const RANDOM_NUM = MissionUtils.Random.pickNumberInRange(0, 9);
  if (RANDOM_NUM >= 4) {
    return true;
  }
  return false;
}
