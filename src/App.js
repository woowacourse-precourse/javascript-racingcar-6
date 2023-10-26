import { MissionUtils } from "@woowacourse/mission-utils";
import GameView from "./GameView";

class App {
  constructor() {
    this.view = new GameView();
  }
  async play() {
    try {
      this.getCarnameInput();
    } catch (error) {
      throw Error(error.message);
    }
  }

  async getCarnameInput() {
    this.view.printGetInputMessage(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const getUserInput = await MissionUtils.Console.readLineAsync();
    // 자동차이름을 쉼표를 기준으로 나누고 문자열로된 배열 생성
    const carnameArr = getUserInput.split(",").map(String);
    await this.view.printGetInputMessage(carnameArr.join(","));

    return carnameArr;
  }
}

export default App;
