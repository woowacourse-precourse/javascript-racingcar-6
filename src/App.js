import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class App {
  constructor() {
    this.ERROR = {
      LENGTH: "[ERROR] 이름은 5자 이하로 작성해주세요.",
      INCORRECT_FORMAT: "[ERROR] 이름을 쉼표(,)로 구분해주세요.",
      INCORRECT_TPYE: "[ERROR] 잘못된 형식입니다. 숫자를 입력해주세요.",
      EMPTY_INPUT: "[ERROR] 이름을 입력하지 않았습니다.",
      DUPLICATION: "[ERROR] 중복된 이름을 입력하셨습니다.",
    };
  }

  getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  getCarName() {
    const carNames = MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    return carNames;
  }

  getMoveCount() {
    const moveCount =
      MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    return moveCount;
  }

  setCars(carNames) {
    const cars = [];

    for (let i = 0; i < carNames.length; i++) {
      cars.push(new Car(carNames[i]));
    }

    return cars;
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
    MissionUtils.Console.print("");
  }

  printWinners(cars) {
    const totalMovements = cars.map((car) => car.move);
    const maxMovement = Math.max(...totalMovements);
    const winners = cars
      .filter((car) => car.move === maxMovement)
      .map((car) => car.name);

    MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }

  async checkValidCarNames(carNames) {
    const pattern = /[.\/-\s;]/;
    const readyCarNames = await carNames
      .split(",")
      .map((carName) => carName.trim());
    const isCorrectName = await readyCarNames.every(
      (value) => value.length < 6
    );
    const hasDuplication =
      (await readyCarNames.length) !== new Set(readyCarNames).size;

    if (pattern.test(readyCarNames))
      this.printErrorMessage(this.ERROR.INCORRECT_FORMAT);

    if (!isCorrectName) this.printErrorMessage(this.ERROR.LENGTH);

    if (hasDuplication) this.printErrorMessage(this.ERROR.DUPLICATION);

    return readyCarNames;
  }

  async initializeCars() {
    const carNames = await this.getCarName();

    if (!carNames) {
      this.printErrorMessage(this.ERROR.EMPTY_INPUT);
    }

    const readyCarNames = this.checkValidCarNames(carNames);

    return readyCarNames;
  }

  async play() {
    const carNames = await this.initializeCars();
    const moveCount = await this.getMoveCount();

    if (isNaN(moveCount)) this.printErrorMessage(this.ERROR.INCORRECT_TPYE);

    const cars = this.setCars(carNames);

    for (let i = 0; i < moveCount; i++) {
      this.printRace(cars);
    }

    this.printWinners(cars);
    return;
  }
}

export default App;
