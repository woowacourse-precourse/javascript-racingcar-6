import { MissionUtils } from "@woowacourse/mission-utils";
import { checkCarNames, checkTryCount } from "./check";
import { MESSAGES } from "./Message";
const { Console, Random } = MissionUtils;
class App {
  carNames = [];
  carNumberOfMove = [];
  tryCount = 0;

  getFinalWinner() {
    const max = Math.max(...this.carNumberOfMove);
    const winners = this.carNames.filter(
      (name, index) => this.carNumberOfMove[index] === max
    );
    return winners.join(", ");
  }

  racing() {
    Console.print(MESSAGES.RESULT);
    for (let i = 0; i < this.tryCount; i++) {
      this.moveForward();
      this.printRacingState();
    }
    Console.print(`${MESSAGES.WINNER}${this.getFinalWinner()}`);
  }

  printRacingState() {
    for (let i = 0; i < this.carNames.length; i++) {
      Console.print(
        `${this.carNames[i]} : ${"-".repeat(this.carNumberOfMove[i])}`
      );
    }
    Console.print("");
  }

  moveForward() {
    for (let i = 0; i < this.carNames.length; i++) {
      const number = Random.pickNumberInRange(0, 9);
      if (number >= 4) {
        this.carNumberOfMove[i] += 1;
      }
      continue;
    }
  }

  resetToZero() {
    for (let i = 0; i < this.carNames.length; i++) {
      this.carNumberOfMove[i] = 0;
    }
  }

  async inputCarNames() {
    const names = await Console.readLineAsync(MESSAGES.INPUT_CAR_NAMES);
    const carNames = checkCarNames(names);
    return carNames;
  }
  async inputTryNumbers() {
    const number = await Console.readLineAsync(MESSAGES.INPUT_TRY_NUMBER);
    const tryCount = checkTryCount(number);
    return tryCount;
  }
  async input() {
    this.carNames = await this.inputCarNames();
    this.tryCount = await this.inputTryNumbers();
  }
  async start() {
    await this.input();
    this.resetToZero();
    this.racing();
  }
  async play() {
    await this.start();
  }
}

export default App;
