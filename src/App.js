import { Console } from "@woowacourse/mission-utils";
import { isInvalidTryNumber, getRandomNumber, isMovable } from "./util";

const MAX_CAR_NAME_LENGTH = 5;
const INITIAL_RACING_COUNT = 0;
const INITIAL_TRY_NUMBER = 0;
const RACING_SYMBOL = "-";
class App {
  carNames = [];
  tryNumber = INITIAL_TRY_NUMBER;
  racingCounts = {};

  async getCarName() {
    const receivedCarNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    this.carNames = receivedCarNames.split(",");
    this.carNames.forEach((carName) => {
      if (carName.length > MAX_CAR_NAME_LENGTH) {
        throw new Error("[ERROR]: 자동차 이름은 5자 이하로 입력해주세요");
      }
      this.racingCounts[carName] = INITIAL_RACING_COUNT;
    });
  }

  async getTryNumber() {
    const receivedTryNumber = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    this.tryNumber = Number(receivedTryNumber);
    if (isInvalidTryNumber(this.tryNumber)) {
      throw new Error("[ERROR]: 시도 횟수는 0보다 큰 숫자로 입력해주세요");
    }
  }

  async play() {
    await this.getCarName();
    await this.getTryNumber();
    Console.print("실행 결과");

    this.doRace();

    Console.print(`최종 우승자: ${this.getWinner()}`);
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
