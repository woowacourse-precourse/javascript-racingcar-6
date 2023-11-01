import CarRacingGame from "./CarRacingGame.js";

class App {
  async play() {
    const carRacingGame = new CarRacingGame();
    await carRacingGame.start().catch((error) => {
      throw error;
    })
  }
}

//const app = new App();
//app.play();

export default App;
