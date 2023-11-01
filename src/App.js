import RacingGame from './RacingGame';

class App {
  async play() {
    const racingGame = new RacingGame();
    await racingGame.runRaceGame();
  }
}

export default App;
