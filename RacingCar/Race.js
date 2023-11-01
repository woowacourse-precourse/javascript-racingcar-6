import { Console } from '@woowacourse/mission-utils';
import { IN_GAME_MESSAGE } from '../src/constants.js';
import { validateTurnNumber } from '../validations/validateTurnNumber.js';

class Race {
  constructor() {
    this.turnNumber = 0;
  }

  async initialize() {
    this.turnNumber = await this.setTurnNumber();
  }

  async setTurnNumber() {
    const turnNumber = await Console.readLineAsync(IN_GAME_MESSAGE.getInputTurnNumber);
    validateTurnNumber(turnNumber);
    return turnNumber;
  }

  proceedRace(car) {
    Console.print(`\n${IN_GAME_MESSAGE.gameStartHeader}`);
    for (let i = 0; i < this.turnNumber; i += 1) {
      car.tryMovingCar();
      car.printCarPosition();
    }
    return car.getCarListObject();
  }
}

export default Race;
