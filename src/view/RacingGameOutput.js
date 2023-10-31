import MESSAGE from '../constants/Message.js';
import ConsoleOutput from '../io/ConsoleOutput.js';
import GameUtils from '../utils/GameUtils.js';

class RacingGameOutput {
  static printGameResult() {
    ConsoleOutput.output(MESSAGE.GAME_RESULT);
  }

  static printNextLine() {
    ConsoleOutput.output('');
  }

  static printCarNameAndRandomNumber(carName, randomNumber) {
    ConsoleOutput.output(`${carName} : ${GameUtils.getDash(randomNumber)}`);
  }

  static printFinalWinner(winner) {
    ConsoleOutput.output(`${MESSAGE.FINAL_WINNERS} : ${winner}`);
  }

  static printFinalWinners(winners) {
    ConsoleOutput.output(`${MESSAGE.FINAL_WINNERS} : ${winners.join(', ')}`);
  }
}

export default RacingGameOutput;
