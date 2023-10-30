import { MissionUtils } from "@woowacourse/mission-utils";

class CarMoving {
  isMove() {
    return this.makeNum() > 3;
  }

  makeNum() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }
}
export default CarMoving;
