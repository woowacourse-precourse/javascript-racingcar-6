import { gameStart } from "./gameStart.js";

class App {
  async play() {
    const players = await gameStart.getCarName();
    const maxNum = await gameStart.getMaxNum();
  }
}

const app = new App();
await app.play();

export default App;
