import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES, INFO_MESSAGES } from "../constant.js";
import Car from "../model/Car.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/outputView.js";

export default class RaceController {
  constructor() {
    this.cars = [];
    this.inputView = new InputView();
    this.outputView = new OutputView();
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

    this.moveForward();
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

  moveForward() {
    this.outputView.printMessage(`\n${INFO_MESSAGES.RACE_RESULT}\n`);
    for (let i = 0; i < this.numOfTry; i++) {
      this.getPoints();
    }
    // 경주 완료 출력
  }

  getPoints() {
    let stepMessage = '';
    this.cars.forEach((car) => {
      if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
        car.point += 1;
      }
      stepMessage += `${car.name}: ${'-'.repeat(car.point)}\n`
    });
    this.outputView.printMessage(`${stepMessage}`);
  }
}
