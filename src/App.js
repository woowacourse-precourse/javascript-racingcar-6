import { Console } from "@woowacourse/mission-utils";
import { systemMessage } from "./message.js";
import RacingGame from "./RacingGame.js";
import InputCarsException from "./InputCarsException.js";
import InputTryCountException from "./InputTryCountException.js";

class App {
  async play() {
    try {
      Console.print(systemMessage.GAME_START);
      let playingCars = await Console.readLineAsync("");

      playingCars = new InputCarsException(playingCars).check();

      Console.print(systemMessage.INPUT_TRY_COUNT);
      let tryCount = await Console.readLineAsync("");

      tryCount = new InputTryCountException(tryCount).check();
      Console.print("");

      let winners = new RacingGame(playingCars, tryCount).racing();

      Console.print(`최종 우승자 : ${winners.join(", ")}`);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
