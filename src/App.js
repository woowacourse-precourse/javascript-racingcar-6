import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    await this.startGame();
  }

  async startGame() {
    const carNames = await this.inputCarNames();
  }

  async inputCarNames() {
    const carsInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉽표(,) 기준으로 구분) \n"
    );
    const carNames = carsInput.split(",").map((name) => name.trim());
    return carNames;
  }
}

export default App;

const app = new App();
app.play();
