import { Console } from "@woowacourse/mission-utils";

import Message from "../Message.js";
import { ERROR_MESSAGE, MESSAGE } from "../constants.js";
import Car from "./Car.js";
import Winner from "./Winner.js";

class Race {
  constructor() {
    this.cars = [];
    this.number = 1;
  }

  get number() {
    return this._number;
  }

  set number(value) {
    Message.logIf(!this.isValid(value), ERROR_MESSAGE.notValidNumber);
    this._number = parseInt(value);
  }

  isValid(value) {
    return /^[1-9]\d*$/.test(value);
  }

  async start() {
    const name = await Console.readLineAsync(MESSAGE.enterCarName);
    const splitedName = this.splitWithoutSpace(name);
    this.cars = this.createCarArrayFrom(splitedName);
    this.number = await Console.readLineAsync(MESSAGE.enterNumberOfRacing);

    this.printResult();
    const winner = new Winner(this.cars);
    winner.print();
  }

  splitWithoutSpace(str) {
    return str.split(",").map((item) => item.trim());
  }

  createCarArrayFrom(nameArr) {
    return nameArr.map((name) => new Car(name));
  }

  printResult() {
    Console.print(MESSAGE.result);

    let result = "";
    for (let i = 0; i < this._number; i++) {
      this.cars.forEach((car) => {
        car.race();
        result += car.print() + "\n";
      });
      result += "\n";
    }
    Console.print(result);
  }
}

export default Race;
