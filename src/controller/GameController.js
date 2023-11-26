import Game from "../model/Game.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class GameController {
  constructor() {
    this.game = new Game(this.cars, this.number);
  }

  async start() {
    await this.requestInput();
  }

  async requestInput() {
    this.cars = await InputView.requestCars();
    this.number = await InputView.requestNumber();
    this.gameExecute();
  }

  gameExecute() {
    const result = this.game.execute(this.cars, this.number);
    this.printWinner(result);
  }

  printWinner(result) {
    const winner = this.game.selectWinner(this.cars, result);
    return OutputView.print(`최종 우승자 : ${winner.join(", ")}`);
  }
}

export default GameController;
