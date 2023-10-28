import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class App {
  constructor() {
    this.ERROR = {
      LENGTH: "[ERROR] 이름은 5자 이내로 작성해주세요.",
      INCORRECT_FORMAT: "[ERROR] 이름을 쉼표(,)로 구분해주세요.",
      INCORRECT_TPYE: "[ERROR] 잘못된 형식입니다. 숫자를 입력해주세요.",
    };
  }

  getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  printErrorMessage(errorMessage) {
    throw new Error(errorMessage);
  }

  printRace(cars) {
    for (let car of cars) {
      const randomNumber = this.getRandomNumber();

      if (randomNumber > 3) car.moveForward();
      car.displayMovement();
    }
  }

  getMoveCount() {
    const moveCount =
      MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    return moveCount;
  }

  async initializeCars() {
    const pattern = /[.\/-]/;
    const carNames = await this.getCarName();
    const readyCarNames = carNames.split(",");
    const isCorrectName = readyCarNames.every((value) => value.length < 5);

    if (pattern.test(carNames))
      this.printErrorMessage(this.ERROR.INCORRECT_FORMAT);
    if (!isCorrectName) this.printErrorMessage(this.ERROR.LENGTH);

    return readyCarNames;
  }

  setCars(carNames) {
    const cars = [];

    for (let i = 0; i < carNames.length; i++) {
      cars.push(new Car(carNames[i]));
    }

    return cars;
  }

  getCarName() {
    const carNames = MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    return carNames;
  }

  async play() {
    const carNames = await this.initializeCars();
    const moveCount = await this.getMoveCount();

    if (isNaN(moveCount)) this.printErrorMessage(this.ERROR.INCORRECT_TPYE);

    const readyCarsForAction = this.setCars(carNames);

    for (let i = 0; i < moveCount; i++) {
      this.printRace(readyCarsForAction);
      MissionUtils.Console.print("");
    }
  }
}

export default App;
