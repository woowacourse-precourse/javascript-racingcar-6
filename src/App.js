import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.strCarName = "";
    this.arrCarName = [];
  }
  async play() {
    // 1-a
    this.strCarName = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
  }
}

export default App;
