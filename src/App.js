import { MissionUtils } from "@woowacourse/mission-utils";
import getNameInput from './components/getNameInput.js';
import getCountInput from "./components/getCountInput.js";

class App {
  async play() {
    const inputNames = await getNameInput();
    const inputCount = await getCountInput();
    MissionUtils.Console.print(inputNames);
    MissionUtils.Console.print(inputCount);
  }
}

export default App;
