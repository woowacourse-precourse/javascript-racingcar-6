import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES, INFO_MESSAGES } from "../constant.js";
import Car from "../model/Car.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

export default class RaceController {
  constructor() {
    this.cars = [];
    this.winners = [];
    this.carNames = [];
    this.numOfTry = 0;
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  async gameStart() {
    await this.getCarNames();
    await this.getNumOfTry();

    this.moveForward();
  }

  async getCarNames() {
    const carNamesString = await this.inputView.readCarNames();

    this.carNames = carNamesString.split(",");
    this.carNames.forEach((carName) => {
      this.cars.push(new Car(carName));
    });

    this.checkCarNamesError();
  }

  hasDuplicateNumber(array, arrayLength) {
    const numberSet = new Set(array);
    return numberSet.size != arrayLength;
  }

  checkCarNamesError() {
    this.carNames.forEach((name) => {
      if (name.length > 5) {
        throw new Error(ERROR_MESSAGES.NUM_OF_CHARACTER_EXCEED);
      } else if (name.trim() === '') {
        throw new Error(ERROR_MESSAGES.BLANK_NAME);
      } 
    });
    if (this.hasDuplicateNumber(this.carNames, this.carNames.length)) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_NAME);
    }
  }

  async getNumOfTry() {
    this.numOfTry = await this.inputView.readNumberOfTry();
    
    this.checkNumOfTryError();
  }

  checkNumOfTryError() {
    const REGEX = /[^0-9]/;
    if (REGEX.test(this.numOfTry) || this.numOfTry == 0) {
      throw new Error(ERROR_MESSAGES.OUT_OF_RANGE);
    }
  }

  moveForward() {
    this.outputView.printMessage(`\n${INFO_MESSAGES.RACE_RESULT}`);
    for (let i = 0; i < this.numOfTry; i++) {
      this.getPoints();
    }
    this.getWinners();
  }

  getPoints() {
    let stepMessage = '';
    this.cars.forEach((car) => {
      if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
        car.point += 1;
      }
      stepMessage += `${car.name} : ${'-'.repeat(car.point)}\n`
    });
    this.outputView.printMessage(`${stepMessage}`);
  }

  getWinners() {
    let maxPoint = 0;
    
    this.cars.forEach((car) => {
      if (maxPoint === car.point) {
        this.winners.push(car.name);
      } else if (maxPoint <= car.point) {
        this.winners = [];
        this.winners.push(car.name);
        maxPoint = car.point;
      }
    });
    this.outputView.printWinners(this.winners.map((winner) => winner).join(','));
  }
}
