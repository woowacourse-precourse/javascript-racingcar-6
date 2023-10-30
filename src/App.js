import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    this.gameStart();
  }

  async gameStart() {
    await this.displayResults();
  }

  async inputCarNames() {
    const carNamesInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    carNamesInput
      .split(",")
      .map((carName) => carName.length > 5 || carName.length <= 0)
      ? Console.print(carNamesInput)
      : Console.print("[ERROR]");
  }

  async inputRotations() {
    await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
  }

  async displayResults() {
    const RACECAR = await this.inputCarNames();
    const SCORES = await this.inputRotations();
  }
}

export default App;
const app = new App();
app.play();
