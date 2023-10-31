import { Console, Random } from "@woowacourse/mission-utils";
import Game from "./Game.js";

class App {
  async getUserInput() {
    const userInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carNames = userInput.split(",");
    return carNames;
  }
  async getPlayRound() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const gameRound = Number(input);
    return gameRound;
  }
  validateCarName(carNames) {
    if (carNames.some((name) => name.length > 5)) {
      throw Error("[ERROR] 자동차 이름은 5자 이하여하여 합니다.");
    }
  }
  validateGameRound(gameRound) {
    if (isNaN(gameRound) || gameRound < 0) {
      throw new Error("[ERROR] 0이상의 숫자만 입력 가능합니다");
    }
  }

  async play() {
    const carNames = await this.getUserInput();
    this.validateCarName(carNames);

    const gameRound = await this.getPlayRound();
    this.validateGameRound(gameRound);
    const game = new Game(carNames);
  }
}

export default App;
