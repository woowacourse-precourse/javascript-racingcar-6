import { MissionUtils } from "@woowacourse/mission-utils";
import getInput from './components/getInput.js'

class App {
  async play() {
    const inputNames = await getInput();
    MissionUtils.Console.print(inputNames)
  }
}

export default App;
