import CarRacing from "./modules/CarRacing.js";

class App {
  // eslint-disable-next-line class-methods-use-this
  async play() {
    await CarRacing.playGame();
  }
}

export default App;
