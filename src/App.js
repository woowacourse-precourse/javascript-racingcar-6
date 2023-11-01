import { RacingGame } from "./game/index.js";

class App {
  async play() {
    const racing = new RacingGame();

    await racing.start();
  }
}

export default App;
