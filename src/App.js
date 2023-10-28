import RacingGame from './RacingGame.js';

class App {
  async play() {
    RacingGame.start();
    RacingGame.inputRacingCarNames();
  }
}

export default App;
