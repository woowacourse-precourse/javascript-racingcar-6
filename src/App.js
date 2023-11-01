import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    await this.startGame();
  }

  async startGame() {
    const carNames = await this.inputCarNames();
    const tries = await this.inputTries();
  }

  async inputCarNames() {
    const carsInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉽표(,) 기준으로 구분) \n"
    );
    const carNames = carsInput.split(",").map((name) => name.trim());
    if (!this.validateCarNames(carNames)) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
    }
    return carNames;
  }

  validateCarNames(names) {
    return names.every((name) => name.length <= 5);
  }

  async inputTries() {
    const triesInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요? \n"
    );
    const tries = parseInt(triesInput, 10);
    return tries;
  }

}

export default App;

const app = new App();
app.play();
