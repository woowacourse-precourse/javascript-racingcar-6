import CarRacingGame from './CarRacingGame.js';

class App {
  async play() {
    const carRacingGame = new CarRacingGame();
    await carRacingGame.run();
  }
}

export default App;
