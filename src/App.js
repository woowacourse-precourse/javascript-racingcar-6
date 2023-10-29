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

    const gameResult = players.map((name) => ({
      name,
      moveNum: 0
    }));

    let gameStep = 0;
    while (gameStep < gameMoveNum) {
      gameResult.forEach((player) => {
        const randomNum = Random.pickNumberInRange(0, 9);
        if (judge.checkMoveCondition(randomNum)) {
          player.moveNum++;
        }
      })
      gameStep++;
    }
  }
}

export default App;
