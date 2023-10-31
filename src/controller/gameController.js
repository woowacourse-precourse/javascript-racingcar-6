import Input from "../gameView/input.js";
import RacingCars from "../model/car/racingCars.js";
import NumberOfAttempt from "../model/game/numberOfAttempt.js";
import { Console } from "@woowacourse/mission-utils";
import Referee from "../model/game/referee.js";
import Output from "../gameView/output.js";

class GameController {
  input = new Input();

  output = new Output();

  racingcars = new RacingCars();

  referee = new Referee();

  async runGame() {
    const inputCarNames = await this.input.getRacingcarsNames();
    this.racingcars.createCars(inputCarNames);

    const inputNumber = await this.input.getNumberOfAttempt();
    const numberOfAttempt = new NumberOfAttempt(inputNumber);
    this.output.printGameResult();
    while (!numberOfAttempt.isFinished()) {
      this.racingcars.moveAllCars();
      this.output.printCarStatusResult(this.racingcars.getCars());
      numberOfAttempt.decrease();
    }
    const winners = this.referee.determineWinner(this.racingcars.getCars());
    this.output.printWinners(winners);
  }
}
export default GameController;
const game = new GameController();
game.runGame();
