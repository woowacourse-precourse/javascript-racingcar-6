import CarRacingGame from './CarRacingGame.js';

class App {
  async play() {
    const carRacingGame = new CarRacingGame();
    await carRacingGame.gameStart();
  }
}

export default App;
