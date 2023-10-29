import { Console, Random } from "@woowacourse/mission-utils";
import User from "./User.js";
import Judge from "./Judge.js";

class App {
  async play() {
    const user = new User();
    const judge = new Judge();

    let players;
    try {
      players = await user.inputPlayersName();
    } catch (error) {
      console.error(error.message);
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
      gameResultInStep.forEach((player) => {
        const randomNum = Random.pickNumberInRange(0, 9);
        if (judge.checkMoveCondition(randomNum)) {
          player.moveNum++;
        }
      })
      judge.printResultInStep(gameResultInStep);
      gameStep++;
    }
  }
}

export default App;
