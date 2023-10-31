import { MissionUtils } from "@woowacourse/mission-utils";

export function moveCar(){
  const move = MissionUtils.Random.pickNumberInRange(0, 9);

  if(move >= 4) return 1;
  return 0;
}