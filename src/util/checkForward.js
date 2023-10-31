import { MissionUtils } from "@woowacourse/mission-utils";

function checkForward(cars) {
  for (let i = 0; i < cars.length; i++) {
    cars[i].curMoveValue = MissionUtils.Random.pickNumberInRange(0, 9);
  }
  return cars;
}

export default checkForward;
