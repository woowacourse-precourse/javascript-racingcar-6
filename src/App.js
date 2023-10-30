import { MissionUtils } from "@woowacourse/mission-utils";
import getCarName from "./getCarName.js";
import getCount from "./getCount.js";
class App {
  async play() {
    const carName = await getCarName();
    MissionUtils.Console.print(carName);

    const count = await getCount();
    MissionUtils.Console.print(count);
  }
}

export default App;
