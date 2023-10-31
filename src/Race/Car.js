import { Random } from "@woowacourse/mission-utils";

export default class Car {
  constructor(input) {
    (this.name = input), (this.distance = 0);
  }

  didProceed() {
    const FORWARD = 1;
    const STOP = 0;
    const allow = 4;
    const proceed = Random.pickNumberInRange(0, 9);
    if (proceed >= allow) return FORWARD;
    return STOP;
  }

  showTrail(distance) {
    let trail;
    const mark = "-";
    if (distance > 0) {
      trail = "-";
      const INITIAL_DISTANCE = 1;
      for (let i = 0; i < distance - INITIAL_DISTANCE; i++) {
        trail += mark;
      }
    } else {
      trail = "";
    }
    return trail;
  }
}
