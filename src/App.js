import getPlayInfo from "./getPlayInfo";
import playGame from "./playGame";
import printResult from "./printResult";
import decideWinner from "./decideWinner";
import makeObject from "./makeObject";

const player = {};
class App {
  async play() {
    const [PARTICIPANTS, TRIALS] = await getPlayInfo();
    makeObject(PARTICIPANTS, player);
    for (let i = 0; i < TRIALS; i++) {
      playGame(player);
      printResult(player);
    }
    decideWinner(player);
  }
}

export default App;
