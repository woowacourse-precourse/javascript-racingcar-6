import { gameStart } from "./gameStart.js";
import { gameProgress } from "./gameProgress.js";

class App {
  async play() {
    const players = await gameStart.getCarName();
    const maxNum = await gameStart.getMaxNum();
    await gameProgress(players, maxNum);
  }
}

const app = new App();
await app.play();

export default App;
