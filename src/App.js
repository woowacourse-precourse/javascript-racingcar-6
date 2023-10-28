import { INPUT_MESSAGE } from "./constants/constant.js";
import { RacingGame } from "./game/index.js";
import {getRandomNumber} from "./util/Random.js";
import { input } from "./util/input.js";
import { makeCarsArray } from "./util/message.js";
import { print } from "./util/output.js";

class App {

  async play() {
    // TODO: 대문자?
    const racing = new RacingGame();

    await racing.start();
  }
}

export default App;
