import CarRacingGame from "./CarRacingGame.js";

class App {
  async play() {
    const carRacingGame = new CarRacingGame();
    carRacingGame.start();
  }
}

const app = new App();
app.play();

export default App;