import { Console, Random } from '@woowacourse/mission-utils';
import { PLAYER_INPUT, RACE } from './Logs.js';
import {
  isPlayerCarNameValidated,
  isPlayerTryNumberValidated,
} from './Validation.js';

class App {
  async play() {
    const raceEntry = this.getPlayerCarsInput();
  }

  async getPlayerCarsInput() {
    const UserInput = await Console.readLineAsync(
      PLAYER_INPUT.CARS_NAME_PROMPT,
    );
    const raceEntry = UserInput.split(',');

    if (isPlayerCarNameValidated(raceEntry)) {
      return raceEntry.split(',');
    }
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
