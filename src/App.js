import { console, random } from "@woowacourse/mission-utils";
import * as racingFunc from "./RarcingcarFunction";
class App {
  async play() {
    const CAR_NAME = await racingFunc.carName();

    const MOVING_NUMBER = await racingFunc.movingNumber();
  }
}

export default App;
