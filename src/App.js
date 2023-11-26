import Game from "./model/Game.js";
import InputView from "./view/InputView.js";
import OutputView from "./view/OutputView.js";

class App {
  async play() {
    const cars = await InputView.requestCars();
    const number = await InputView.requestNumber();
    const game = new Game(cars, number);

    const result = game.execute();
    const winner = game.selectWinner(result);
    OutputView.print(winner.join(", "));
  }
}

export default App;
