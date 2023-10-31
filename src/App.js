// class
import { RacingGame } from "./Class/RacingGame";
// constants
import { ERROR_MESSAGE } from "./Constant";
// utils
import { getWinnerArray } from "./utils/calc";
import { HandleInput } from "./utils/HandleInput";
import { HandleOutput } from "./utils/HandleOutput";

class App {
  async play() {
    try {
      const carNames = await HandleInput.carNames();
      const gameRounds = await HandleInput.gameRounds();
      const racingGame = new RacingGame(carNames);

      HandleOutput.initial();
      for (let i = 0; i < gameRounds; i++) {
        racingGame.playSingleRound();
        HandleOutput.roundResult(racingGame.cars);
      }
      const winners = getWinnerArray(racingGame.cars);
      HandleOutput.finalResult(winners);
    } catch (err) {
      if (Object.values(ERROR_MESSAGE).includes(err.message)) throw err;
      throw new Error(ERROR_MESSAGE.UNKNOWN_ERROR);
    }
  }
}

export default App;
