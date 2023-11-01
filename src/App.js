import RacingGame from './RacingGame';

class App {
  
  async play() {
    const racingGame = new RacingGame();
    await racingGame.start();
  }
}

export default App;
