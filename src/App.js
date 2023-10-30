import { MissionUtils } from "@woowacourse/mission-utils";

import PRINTOUT from "../src/Printout.js";

class App {
  async play() {
    // 자동차 이름 받기
    const inputCars = await MissionUtils.Console.readLineAsync(
      PRINTOUT.ASK_NAME
    );

    // 쉼표로 이름 분리
    let enterCars = inputCars.split(",");
    MissionUtils.Console.print(enterCars);
  }
}

export default App;
