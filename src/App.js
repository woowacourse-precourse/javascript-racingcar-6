import { MissionUtils } from "@woowacourse/mission-utils";
import MSG from "./message.js"
import nameValidation from "./validation.js"
import game from "./game.js"

class App {
  async play() {
    const inputName = await MissionUtils.Console.readLineAsync(MSG.GAMESTART);
    const carNames = inputName.split(",");
    nameValidation(carNames);
    const cnt = await MissionUtils.Console.readLineAsync(MSG.INPUTCOUNT);
    MissionUtils.Console.print(MSG.RESULT)
    game(carNames, cnt)
  }
    
}

export default App;
