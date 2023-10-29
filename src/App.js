import RacingCarGame from "./Controllers/RacingCarGame.js";

class App {
  async play() {
    const racingCarGame = new RacingCarGame();
    await racingCarGame.start();
  }
}
const app = new App();
app.play();

export default App;
