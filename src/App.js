import RacingGame from './racing/RacingGame';

class App {
  play() {
    const racingGame = new RacingGame();
    return racingGame.gameStart();
  }
}

export default App;
