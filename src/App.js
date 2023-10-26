import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class App {
  async play() {
    const names = await this.getCarNames();
    const times = await this.getPlayTimes();
  }

  async getCarNames() {
    try {
      const names = MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      return names;
    } catch (error) {
      console.log(error.message);
    }
  }

  async getPlayTimes() {
    try {
      const times =
        MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

      return times;
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default App;
