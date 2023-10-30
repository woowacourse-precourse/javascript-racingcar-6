import GameSettingInput from "./GameSettingInput.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const gameSettingInput = new GameSettingInput();
    const gameSetting = await gameSettingInput.collect();
    Console.print(gameSetting);
  }
}

export default App;
