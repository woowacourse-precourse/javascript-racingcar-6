import { Random } from "@woowacourse/mission-utils";
import { Input } from "../IO/Input.js";
import { Output } from "../IO/Output.js";
import Constants from "../Misc/constatns.js";
import { Verification } from "./Verification.js";

export class Car {
  constructor(input) {
    (this.name = input), (this.distance = 0);
  }

  didProceed() {
    const random = Random.pickNumberInRange(0, 9);
    if (random >= 4) return 1;
    return 0;
  }

  showTrail(distance) {
    let trail;
    const mark = "-";
    if (distance > 0) {
      trail = "-";
      for (let i = 0; i < distance - 1; i++) {
        trail += mark;
      }
    } else {
      trail = "";
    }
    return trail;
  }
}
