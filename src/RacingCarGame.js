import { GAME } from './constants.js';
import Input from './view/input.js';
import Output from './view/output.js';
import { Winner, RacingCarName, RacingTryCount, CarController } from './racingcargame/index.js';

class RacingCarGame {
  async start() {
    const carName = await Input.text(GAME.CAR_NAME_INPUT);
    RacingCarName.validate(carName);

    const tryCount = await Input.text(GAME.TRY_COUNT_INPUT);
    RacingTryCount.validate(Number(tryCount));
    Output.text('');

    const carController = new CarController(carName.split(','));
    this.playRace(carController, tryCount);
    this.printWinners(carController);
  }

  playRace(carController, tryCount) {
    for (let i = 0; i < tryCount; i += 1) {
      this.controller(carController);
    }
  }

  controller(carController) {
    carController.playAdvance();
    carController.cars.forEach((car) => Output.text(car.printAdvanceResult()));
    Output.text('');
  }

  printWinners(carController) {
    const winners = new Winner(carController.racingResult());
    winners.getKeysOfMaxValue(winners.findMaxValue());
    Output.text(GAME.WINNER + winners.printWinners());
  }
}

export default RacingCarGame;
