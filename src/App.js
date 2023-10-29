import { Console, Random } from '@woowacourse/mission-utils';
import { PLAYER_INPUT, RACE } from './Logs.js';
import {
  isPlayerCarNameValidated,
  isPlayerTryNumberValidated,
} from './Validation.js';

class App {
  constructor() {
    this.playerData = [];
  }

  async play() {
    const raceEntry = this.getPlayerCarsInput();
  }

  async getPlayerCarsInput() {
    const userInput = await Console.readLineAsync(
      PLAYER_INPUT.CARS_NAME_PROMPT,
    );
    const raceEntry = userInput.split(',');

    if (isPlayerCarNameValidated(raceEntry)) {
      return [...raceEntry];
    }
  }

  createPlayerData(raceEntry) {
    raceEntry.forEach(playerName => {
      this.playerData.push({ playerName, trackLocation: '' });
    });
  }
}

export default App;

const app = new App();
app.play();

// 필요한 함수들
// getPlayerCarsInput
// isPlayerCarNameValidated
// getPlayerTryNumberInput
// isPlayerTryNumberValidated
// startRace
// shouldCarMoveForward
// addCarMoveProgressBar
// checkWinners
// printRaceStatus
// printWinners
