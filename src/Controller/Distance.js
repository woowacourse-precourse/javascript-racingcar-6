import { Random } from "@woowacourse/mission-utils";

const GO = 1;

export default class Distance {
  isGoStop(carObject) {
    const num = Random.pickNumberInRange(0, 9);
    if (num > 3) {
      carObject.distance += GO;
    }
  }
}
