import CarRacing from "./utils/CarRacing.js";

class App {
  // eslint-disable-next-line class-methods-use-this
  async play() {
    await CarRacing.playGame();
  }
}

export default App;
