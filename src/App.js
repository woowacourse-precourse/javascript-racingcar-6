import { MissionUtils } from "@woowacourse/mission-utils";

const CAR_NAME_MESSAGE =
  "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n";
const ATTEMP_COUNT_MESSAGE = "시도할 횟수는 몇 회인가요?\n";

class App {
  async play() {
    this.#controller();
  }

  async #controller() {
    const carName = await this.#readCarName();
    const attempCount = await this.#readAttempCount();
    this.#getDistance(carName, attempCount);
  }

  async #readCarName() {
    return MissionUtils.Console.readLineAsync(CAR_NAME_MESSAGE);
  }

  async #readAttempCount() {
    return MissionUtils.Console.readLineAsync(ATTEMP_COUNT_MESSAGE);
  }

  #getDistance(carName, attempCount) {
    MissionUtils.Console.print("실행 결과");
    let distance = 0;
    for (let i = 0; i < attempCount; i++) {
      distance += this.#checkGo();
      MissionUtils.Console.print(carName + " : " + "-".repeat(distance));
      MissionUtils.Console.print(" ");
    }
  }

  #checkGo() {
    const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomValue > 3;
  }
}

export default App;
