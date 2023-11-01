import UserInput from './UserInput.js';
import RacingGame from './RacingGame.js';
class App {
  async play() {
    const raceCarNames = await UserInput.getRaceCarNames();
    const raceRoundCount = await UserInput.getRaceRoundCount();
    const racingGame = new RacingGame(raceCarNames, raceRoundCount);

    racingGame.start();

    racingGame.calculateWinner();
    racingGame.printWinner();
  }
}

export default App;
