import { GameController } from "./controller/GameController";
class App {
  async play() {
    await GameController.racingGame();
  }
}

export default App;

const app = new App();
app.play();
