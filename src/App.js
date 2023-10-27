import RacingGame from "./Controller/RacingGame.js";

class App {
  async play() {
    const racingGame = new RacingGame();
    racingGame.start();
  }
}

const app = new App();
app.play();
export default App;
