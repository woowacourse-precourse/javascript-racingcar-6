import { Console } from "@woowacourse/mission-utils";
import App from "./App.js";

class GamePlay {
  async getUserInput(message) {
    const INPUT = await Console.readLineAsync(message);

    return INPUT;
  }

  async getCarNames() {
    const CARS = await this.getUserInput(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
  }

  async getTryTimes() {
    const TIMES = await this.getUserInput("시도할 횟수는 몇 회인가요?");
  }
}

export default GamePlay;
