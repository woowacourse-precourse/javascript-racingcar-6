import { RacingGame } from "./games/RacingGame.js";
import { TraceGame } from "./games/TraceGame.js";

class App {
  async play() {
    const result = await RacingGame();
    TraceGame(result);
  }
}

export default App;
