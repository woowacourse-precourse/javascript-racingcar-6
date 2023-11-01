import { RacingGame } from "./games/RacingGame.js";
import { TraceGame } from "./games/TraceGame.js";
import { WinnerAward } from "./games/WinnerAward.js";

class App {
  async play() {
    const { cars, inputCount } = await RacingGame();
    const traceRoad = TraceGame({ cars, inputCount });
    WinnerAward(cars, traceRoad);
  }
}

export default App;
