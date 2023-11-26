import Game from "./model/Game.js";
import InputView from "./view/InputView.js";

class App {
  async play() {
    const cars = await InputView.requestCars();
    const number = await InputView.requestNumber();
    const game = new Game(cars, number);
    game.execute();
  }
}

export default App;
