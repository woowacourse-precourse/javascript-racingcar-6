import { MissionUtils } from "@woowacourse/mission-utils";
import { Messages } from "./Constants/Messages.js";

class App {
  async play() {
    MissionUtils.Console.print(Messages.INPUT_CARNAME);
  }
}

export default App;
