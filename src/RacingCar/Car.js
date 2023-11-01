import { Random } from "@woowacourse/mission-utils";

import Message from "../Message.js";
import { ERROR_MESSAGE } from "../constants.js";

class Car {
  constructor(name) {
    this.name = name;
    this.distance = "";
  }

  get name() {
    return this._name;
  }

  set name(value) {
    Message.logIf(!this.isValid(value), ERROR_MESSAGE.notValidName);
    this._name = value;
  }

  isValid(value) {
    return value.length <= 5;
  }

  race() {
    if (this.movingForward()) this.move();
  }

  movingForward() {
    const randomNum = Random.pickNumberInRange(0, 9);

    if (randomNum >= 4) return true;
    return false;
  }

  move() {
    this.distance += "-";
  }

  print() {
    return `${this._name} : ${this.distance}`;
  }
}

export default Car;
