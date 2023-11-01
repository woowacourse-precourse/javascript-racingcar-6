import { Console } from "@woowacourse/mission-utils";
import { isInvalidTryNumber, getRandomNumber, isMovable } from "./util";
import { MESSAGE, ERROR_MESSAGE } from "./constants";

const MAX_CAR_NAME_LENGTH = 5;
const INITIAL_RACING_COUNT = 0;
const INITIAL_TRY_NUMBER = 0;
const RACING_SYMBOL = "-";
class App {
  carNames = [];
  tryNumber = INITIAL_TRY_NUMBER;
  racingCounts = {};

  async getCarName() {
    const receivedCarNames = await Console.readLineAsync(MESSAGE.INPUT_NAME);
    this.carNames = receivedCarNames.split(",");
    this.carNames.forEach((carName) => {
      if (carName.length > MAX_CAR_NAME_LENGTH) {
        throw new Error(ERROR_MESSAGE.TOO_LONG_NAME);
      }
      this.racingCounts[carName] = INITIAL_RACING_COUNT;
    });
  }

  async getTryNumber() {
    const receivedTryNumber = await Console.readLineAsync(
      MESSAGE.INPUT_TRY_NUMBER
    );
    this.tryNumber = Number(receivedTryNumber);
    if (isInvalidTryNumber(this.tryNumber)) {
      throw new Error("[ERROR]: 시도 횟수는 0보다 큰 숫자로 입력해주세요");
    }
  }

  async play() {
    await this.getCarName();
    await this.getTryNumber();
    Console.print(MESSAGE.RACE_RESULT);

    this.doRace();

    Console.print(`${MESSAGE.WINNER} : ${this.getWinner()}`);
  }

  doRace() {
    while (!this.isCompletedRace()) {
      this.moveCars();
      this.showRacingStatus();
      this.decreaseTryNumber();
    }
  }

  isCompletedRace() {
    return this.tryNumber <= 0;
  }

  decreaseTryNumber() {
    this.tryNumber = this.tryNumber - 1;
  }

  increaseRacingCountsBy(carName) {
    this.racingCounts[carName] = this.racingCounts[carName] + 1;
  }

  moveCars() {
    Object.keys(this.racingCounts).forEach((carName) => this.moveCar(carName));
  }

  moveCar(carName) {
    if (isMovable(getRandomNumber())) {
      this.increaseRacingCountsBy(carName);
    }
  }

  showRacingStatus() {
    Object.keys(this.racingCounts).forEach((carName) =>
      Console.print(this.getStatus(carName))
    );
    Console.print("");
  }

  getStatus(carName) {
    return `${carName} : ${RACING_SYMBOL.repeat(this.racingCounts[carName])}`;
  }

  getWinner() {
    const maxRacingCount = Math.max(...Object.values(this.racingCounts));
    const winner = Object.entries(this.racingCounts)
      .filter(([, racingCount]) => racingCount === maxRacingCount)
      .map(([carName]) => carName)
      .join(", ");
    return winner;
  }
}

export default App;
