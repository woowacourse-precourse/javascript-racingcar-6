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
}
