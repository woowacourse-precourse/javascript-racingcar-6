import { MissionUtils } from '@woowacourse/mission-utils';
import Game from './game.js';

class App {
  async play() {
    const game = new Game();
    await game.start();
    for (let i = 0; i < game.numberOfAttempt; i++) {
      if (i === 0) MissionUtils.Console.print(`\n실행 결과`);
      game.execution();
    }
  }
}

export default App;
