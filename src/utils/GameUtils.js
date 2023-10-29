import MESSAGE from '../constants/Message.js';
import ConsoleOutput from '../io/ConsoleOutput.js';

class GameUtlis {
  static repeatRacing(attemptNumber, racingGame) {
    ConsoleOutput.output(MESSAGE.GAME_RESULT);

    Array.from({ length: attemptNumber }, () => racingGame.tryOneAttempt());
  }
}

export default GameUtlis;
