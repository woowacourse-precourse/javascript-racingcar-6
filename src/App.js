import { MissionUtils } from '@woowacourse/mission-utils';
import Game from './game.js';
import { ANNOUNCEMENT } from './message.js';

class App {
  async play() {
    const game = new Game();
    await game.start();
    for (let i = 0; i < game.numberOfAttempt; i++) {
      if (i === 0) MissionUtils.Console.print(ANNOUNCEMENT.EXECUTION);
      game.execution();
    }
    game.end();
  }
}

export default App;
