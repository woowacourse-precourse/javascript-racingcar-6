import { winner } from "./racingGame.js";

class App {
  async start() {
    await winner();
  }

  async play() {
    await this.start();
  }
}

export default App;
