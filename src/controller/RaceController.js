import { ERROR_MESSAGES } from "../constant.js";
import Car from "../model/Car.js";
import InputView from "../view/InputView.js";

export default class RaceController {
  constructor() {
    this.cars = [];
    this.inputView = new InputView();
  }

  init() {
    this.gameStart();
  }

  async gameStart() {
    // 자동차 이름
    this.carNames = await this.inputView.readCarNames();
    this.getCarNames(this.carNames);
    // 시도 횟수
    this.numOfTry = await this.inputView.readNumberOfTry();
    this.checkNumOfTryError(this.numOfTry);
  }

  getCarNames(carNames) {
    this.carNamesArray = carNames.split(",");
    this.carNamesArray.forEach((element) => {
      this.cars.push(new Car(element));
    });
    this.checkCarNamesError(this.carNamesArray);
  }

  exceedArrayMaxLength(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].length > 5) {
        return true;
      }
    }
  }

  hasDuplicateNumber(array, arrayLength) {
    const numberSet = new Set(array);
    return numberSet.size != arrayLength;
  }

  checkCarNamesError(array) {
    if (this.exceedArrayMaxLength(array)) {
      throw new Error(ERROR_MESSAGES.NUM_OF_CHARACTER_EXCEED);
    } else if (this.hasDuplicateNumber(array, array.length)) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_NAME);
    }
  }

  checkNumOfTryError(number) {
    const REGEX = /[^0-9]/;
    if (REGEX.test(number) || number == 0) {
      throw new Error(ERROR_MESSAGES.OUT_OF_RANGE);
    }
  }
}
