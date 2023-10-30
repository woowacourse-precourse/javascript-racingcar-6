import { Random } from '@woowacourse/mission-utils';
import Cars from '../models/Cars.js';
import View from '../views/View.js';
import { ERROR_MESSAGE } from '../constants/message.js';
import { carsValidationLengthAndChar } from '../util/validation.js';

class Controller {
  #cars;

  async startGame() {
    View.printRacingGameStart();
    this.#cars = new Cars();

    await this.controllOutput();
  }

  async controlCarOutput() {
    const carString = await View.writeRaingGameCarNames();
    Controller.#checkValidateCar(carString.trim());
    this.#cars.setCars(Controller.#makeCarsArray(carString));
  }

  static #checkValidateCar(cars) {
    const carsArray = cars.split(',');

    // 쉼표로 시작하는지 확인
    if (cars[0] === ',') throw new Error(ERROR_MESSAGE.CAR_NAME_ERROR);

    // 각 차량 이름의 길이와 문자 확인
    carsArray.filter(carsValidationLengthAndChar);

    // 차량 중복 여부 확인
    const carSet = new Set(carsArray);
    if (carSet.size !== carsArray.length) throw new Error(ERROR_MESSAGE.CAR_NAME_DUPLICATED);

    // 차량 대수 확인
    if (carsArray.length < 2 || carsArray.length > 100) throw new Error(ERROR_MESSAGE.CAR_COUNTING);
  }

  static #makeCarsArray(cars) {
    return cars.split(',').map((item) => item.trim());
  }
}

export default Controller;
