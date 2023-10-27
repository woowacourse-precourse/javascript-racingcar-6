import Name from "./Name.js";
import { Random } from "@woowacourse/mission-utils";

export default class Car {
  constructor(name) {
    this.name = new Name(name).name;
  }
  #getRandomDistance() {
    return Random.pickNumberInRange(0, 9);
  }
}
