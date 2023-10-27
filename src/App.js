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
    // 1-b
    this.arrCarName = this.strCarName.split(",");
    // 1-c
    this.arrCarName.map((name) => {
      if (name.trim().length > 5 || name.trim().length < 1) {
        throw new Error("[ERROR] : 자동차 이름은 5글자 이내로 입력해야 합니다!");
      }
    });
  }
}

export default App;
