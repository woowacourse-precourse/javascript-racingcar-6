import { gameStart } from "./gameStart.js";
import { gameProgress } from "./gameProgress.js";
import { gameEnd } from "./gameEnd.js";

class App {
  async play() {
    const players = await gameStart.getCarName();
    const maxNum = await gameStart.getMaxNum();
    const result = await gameProgress(players, maxNum);
    await gameEnd(result);
  }
}

export default App;
