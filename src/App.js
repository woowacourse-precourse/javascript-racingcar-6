import { Game } from "./Game.js";
import { GameInitializer } from "./GameInitializer.js";

class App {
  async play() {
    const gameOptions = await GameInitializer.readGameOptionsFromuser();
    const game = new Game(gameOptions);
    game.startPlay();
  }
}

export default App;
