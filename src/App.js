import RacingGame from './racing/RacingGame.js';

class App {
  play() {
    const racingGame = new RacingGame();
    racingGame.gameStart();
  }
}

export default App;
