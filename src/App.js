import { Console } from "@woowacourse/mission-utils";
import { MSG } from "./message.js";
import {carValidation, countValidation} from "./validation.js";
import game from "./game.js";

class App {
  async play() {
    const carNames = (await Console.readLineAsync(MSG.GAMESTART)).split(",");
    carValidation(carNames);
    const cnt = await Console.readLineAsync(MSG.INPUTCOUNT);
    countValidation(cnt);
    game(carNames, cnt)
  }
    
}

export default App;
