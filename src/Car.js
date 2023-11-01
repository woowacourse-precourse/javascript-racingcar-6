import { Console } from "@woowacourse/mission-utils";
import { GAME_HELP } from "../constants/GAME_HELP.js";
import { CAR_VALIDATION } from "../constants/VALIDATION.js";
import { CAR_NAME_MAX_LENGTH } from "../constants/NUMBER.js";

const reg = /[\{\}\[\]\/?.;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;

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
    if (Car.#isDuplicate(car)) {
      throw new Error(CAR_VALIDATION.DUPLICATE);
    }

    if (Car.#isNameLength(car)) {
      throw new Error(CAR_VALIDATION.LENGTH);
    }

    if (Car.#isBlank(car)) {
      throw new Error(CAR_VALIDATION.BLANK);
    }

    if (Car.#isSpecialSymbol(car)) {
      throw new Error(CAR_VALIDATION.SPECIAL_SYMBOL);
    }
  }

  static #isDuplicate(car) {
    return car.some(
      (carName) => car.indexOf(carName) !== car.lastIndexOf(carName)
    );
  }

  static #isNameLength(car) {
    return car.some((carName) => carName.length > CAR_NAME_MAX_LENGTH + 1);
  }

  static #isBlank(car) {
    return car.some((carName) => carName === "");
  }

  static #isSpecialSymbol(car) {
    return car.some((carName) => reg.test(carName));
  }
}

export default Car;
