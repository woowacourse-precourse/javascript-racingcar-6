import { Console } from "@woowacourse/mission-utils";
import App from "./App.js";

class GamePlay {
  async getCarNames() {
    const CAR_NAME = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
  }
}

export default GamePlay;

const app = new App();
app.play();
