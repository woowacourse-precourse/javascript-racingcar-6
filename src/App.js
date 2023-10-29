import SettingCars from './SettingCars.js';
import RacingGame from './RacingGame.js';

class App {
  async play() {
    const settingCars = new SettingCars();
    const registeredCars = await settingCars.registerCars();

    const racingGame = new RacingGame();
    const totalRacingCount = await racingGame.getRacingCount();

    for (let count = 0; count < totalRacingCount; count += 1) {
      racingGame.playRacing(registeredCars);
      racingGame.showGameStatus(registeredCars);
    }

    const racingWinners = racingGame.findWinner(registeredCars);
    racingGame.announceWinner(racingWinners);
  }
}

export default App;
