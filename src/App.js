import { game } from "./game.js";

class App {
  async play() {
    await game();
  }
}

export default App;
