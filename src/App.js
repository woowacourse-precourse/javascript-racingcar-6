import { MissionUtils } from "@woowacourse/mission-utils";
import { Messages } from "./Constants/Messages.js";

class App {
  async play() {
    MissionUtils.Console.print(Messages.INPUT_CARNAME);

    const carNameInput = await MissionUtils.Console.readLineAsync('');
  }
  
  async carName(carNameInput) {
    let carNameArr = carNameInput.split(',');

    return carNameArr;
  }

}

const app = new App();
app.play();

export default App;