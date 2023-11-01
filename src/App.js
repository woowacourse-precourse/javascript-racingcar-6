import { startGame } from "./controllers/GameController";

class App {
  async play() {
    await startGame();
  }
}

export default App;
