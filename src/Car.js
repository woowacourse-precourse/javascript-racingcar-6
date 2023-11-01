import { Console } from "@woowacourse/mission-utils";
import { GAME_HELP } from "../constants/GAME_HELP.js";
import { CAR_VALIDATION } from "../constants/VALIDATION.js";
import {
  isDuplicate,
  isCorrectNameLength,
  isBlank,
  isSpecialSymbol,
} from "../utils/validation.js";

class Car {
  constructor() {
    this._carNameList = [];
  }

  async getInputCar() {
    const carName = await Console.readLineAsync(GAME_HELP.INPUT_CAR);
    this.carNameList = carName.split(",");
  }

  set carNameList(car) {
    car = car.map((carName) => carName.replace(/\s/g, ""));
    Car.validateCarNameList(car);
    this._carNameList = car;
  }

  get carNameList() {
    return this._carNameList;
  }

  static validateCarNameList(car) {
    if (isDuplicate(car)) {
      throw new Error(CAR_VALIDATION.DUPLICATE);
    }

    if (isCorrectNameLength(car)) {
      throw new Error(CAR_VALIDATION.LENGTH);
    }

    if (isBlank(car)) {
      throw new Error(CAR_VALIDATION.BLANK);
    }

    if (isSpecialSymbol(car)) {
      throw new Error(CAR_VALIDATION.SPECIAL_SYMBOL);
    }
  }
}

export default Car;
