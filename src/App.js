import { startGame } from "./controllers/GameControllers";

class App {
  async play() {
    await startGame();
  }
}

export default App;
