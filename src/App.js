import View from "./View.js";
import CarList from "./CarList.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  carList;
  view = new View();

  playNTimes(n) {
    MissionUtils.Console.print("\n실행결과");
    for (let i = 0; i < n; i++) {
      this.carList.oneRound();
      MissionUtils.Console.print("\n");
    }
  }

  async play() {
    this.carList = new CarList(await this.view.getCarName());
    const COUNT = await this.view.getRound();
    this.playNTimes(COUNT);
  }
}

export default App;
