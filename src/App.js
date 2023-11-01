import SettingCars from './SettingCars.js';
import RacingGame from './RacingGame.js';

class App {
  async play() {
    const registeredCars = await SettingCars.registerCars();

    const racingGame = new RacingGame(registeredCars);
    const totalRacingCount = await racingGame.getRacingCount();

    for (let count = 0; count < totalRacingCount; count += 1) {
      racingGame.playRacing();
      racingGame.showGameStatus();
    }

    racingGame.findWinner();
    racingGame.announceWinner();
  }
}

export default App;
