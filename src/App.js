import RacingGame from './RacingGame.js';
import UserInterface from './UserInterface.js';

class App {
  async play() {
    try {
      const carNames = await UserInterface.getCarNames();
      const raceRounds = await UserInterface.getRaceRounds();
      const game = new RacingGame(carNames, raceRounds);
      game.start();
      const winners = game.getWinners();
      UserInterface.printWinners(winners);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
