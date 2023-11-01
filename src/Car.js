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

    this.duplicate(car);
    this.nameLength(car);
    this.blank(car);
    this.special_symbol(car);

    this._carNameList = car;
  }

  get carNameList() {
    return this._carNameList;
  }

  duplicate(car) {
    const isDuplicate = car.some(function (x) {
      return car.indexOf(x) !== car.lastIndexOf(x);
    });

    if (isDuplicate) {
      throw new Error(CAR_VALIDATION.DUPLICATE);
    }
  }

  nameLength(car) {
    if (car.some((carName) => carName.length > CAR_NAME_MAX_LENGTH + 1)) {
      throw new Error(CAR_VALIDATION.LENGTH);
    }
  }

  blank(car) {
    if (car.some((x) => x === "")) {
      throw new Error(CAR_VALIDATION.BLANK);
    }
  }

  special_symbol(car) {
    if (car.some((x) => reg.test(x))) {
      throw new Error(CAR_VALIDATION.SPECIAL_SYMBOL);
    }
  }
}

export default Car;
