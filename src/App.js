import { winner } from "./racingGame.js";

class App {
  async play() {
    await winner();
  }
}

export default App;
