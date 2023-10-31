import { MissionUtils } from "@woowacourse/mission-utils";
import { checkCarNames, checkTryCount } from "./check.js";
const { Console, Random } = MissionUtils;
class App {
  carNames = [];
  carNumberOfMove = [];
  tryCount = 0;

  moveForwardOrStop() {
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
    const names = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carNames = checkCarNames(names);
    return carNames;
  }
  async inputTryCount() {
    const number = await Console.readLineAsync("시도할 회수는 몇회인가요?");
    const tryCount = checkTryCount(number);
    return tryCount;
  }
  async input() {
    this.carNames = await this.inputCarNames();
    this.tryCount = await this.inputTryCount();
  }
  async startRace() {
    await this.input();
    this.resetToZero();
    this.moveForwardOrStop();

    console.log(this.carNumberOfMove);
  }
  async play() {
    this.startRace();
  }
}

export default App;
