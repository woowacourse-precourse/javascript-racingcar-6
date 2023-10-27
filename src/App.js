import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.strCarName = "";
    this.arrCarName = [];
    this.attempts = [];
    this.race = [];
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

    // 1-d
    this.attempts = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    );
    // 1-e
    if (this.attempts < 0 || isNaN(this.attempts) == true) {
      throw new Error("[ERROR] : 시도 횟수가 잘못 입력되었습니다. 정수를 입력해주세요.");
    }

    // 2-a
    this.arrCarName.forEach((name) => {
      this.race.push([name, 0]);
    });
  }
}

export default App;
