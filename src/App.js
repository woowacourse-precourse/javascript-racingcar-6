import { Console, MissionUtils } from "@woowacourse/mission-utils";
import EndGame from "./classes/EndGame.js";
import InitGame from "./classes/InitGame.js";
import PlayGame from "./classes/PlayGame.js";

class App {
  async play() {
    const initGame = new InitGame();
    const playGame = new PlayGame();
    const endGame = new EndGame();

    await initGame.init();
    const carList = playGame.progress(initGame.carList, initGame.gameCount);
    endGame.result(carList);
  }
}
const app = new App();
app.play();

export default App;
