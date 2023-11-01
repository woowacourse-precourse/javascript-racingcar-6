import CarRacingGame from "./CarRacingGame.js";

class App {
  async play() {
    const carRacingGame = new CarRacingGame();
    await carRacingGame.start().catch((error) => {
      throw error;
    })
  }
}

export default App;
