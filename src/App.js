import { Console, Random } from '@woowacourse/mission-utils';
import { PLAYER_INPUT, ERROR_MESSAGES, RACE } from './Logs.js';

class App {
  async play() {}

  async getPlayerCarsInput() {
    const ANSWER = await Console.readLineAsync(PLAYER_INPUT.CARS_NAME_PROMPT);

    // 유효성 검사
    return ANSWER.split(',');
  }
}

export default App;

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
