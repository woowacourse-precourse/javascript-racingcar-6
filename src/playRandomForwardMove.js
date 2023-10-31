import { MissionUtils } from "@woowacourse/mission-utils";

export default function playRandomForwardMove(map) {
  //map carName : moveNum
  for (const [key, value] of map) {
    if (getRandomNum()) {
      //참 -> 전진
      map.set(key, value + 1);
    }
  }
}

function getRandomNum() {
  const RANDOM_NUM = MissionUtils.Random.pickNumberInRange(0, 9);
  if (RANDOM_NUM >= 4) {
    //전진
    return true;
  }
  return false;
}
