import Input from "../gameView/input.js";
import RacingCars from "../model/car/racingCars.js";
import NumberOfAttempt from "../model/game/numberOfAttempt.js";
import { Console } from "@woowacourse/mission-utils";

class GameController {
  input = new Input();

  racingcars = new RacingCars();

  async runGame() {
    const inputCarNames = await this.input.getRacingcarsNames();
    this.racingcars.createCars(inputCarNames);

    const inputNumber = await this.input.getNumberOfAttempt();
    const numberOfAttempt = new NumberOfAttempt(inputNumber);

    while (!numberOfAttempt.isFinished()) {
      this.racingcars.moveAllCars();
      this.racingcars.forEach((car) => {
        Console.print(`${car.getName()} : ${"-".repeat(car.getMoveCount())}`);
      });
      numberOfAttempt.decrease();
    }
  }
}
export default GameController;
const game = new GameController();
game.runGame();
