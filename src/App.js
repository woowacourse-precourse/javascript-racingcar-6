import { MissionUtils } from "@woowacourse/mission-utils";
import { randomNumber } from "./randomNumber.js";
import getCarName from "./getCarName.js";

class App {
  async play() {
    const carName = await getCarName();
    MissionUtils.Console.print(carName);
  }
}

export default App;
