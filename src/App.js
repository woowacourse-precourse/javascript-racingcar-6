import RacingGame from './racing/RacingGame.js';

class App {
  play() {
    const racingGame = new RacingGame();
    return racingGame.gameStart();
  }
}

export default App;
