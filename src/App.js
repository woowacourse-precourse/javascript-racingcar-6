import { Console } from '@woowacourse/mission-utils';
import User from './User.js';
import Judge from './Judge.js';

class App {
  async play() {
    const user = new User();
    const judge = new Judge();

    let players;
    try {
      players = await user.inputPlayersName();
    } catch (error) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }  

    const gameMoveNum = await user.inputMoveNum();

    const gameResultInStep = players.map((name) => ({
      name,
      moveNum: 0
    }));

    Console.print('\n실행 결과');

    let gameStep = 0;
    while (gameStep < gameMoveNum) {
      judge.playStep(gameResultInStep);
      judge.printResultInStep(gameResultInStep);
      gameStep++;
    }

    judge.printWinner(gameResultInStep);
  }
}

export default App;
