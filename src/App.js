import { startGame } from "./racingCar";

class App {
  async play() {
    try {
      await startGame();
    } catch (error) {
      throw new Error("[ERROR]");
    }
  }
}

export default App;
