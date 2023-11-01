import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../Constants/Constants.js';
import MoveCar from '../RaceGame/MoveCar.js';
import Winner from '../RaceGame/Winner.js';

class RaceResult {
  constructor() {
    this.forwardStatus = new Map();
    this.moveCar = new MoveCar(this.forwardStatus);
    this.winner = new Winner(this.forwardStatus);
  }

  getRaceResult = (carNames, attempt) => {
    Console.print(OUTPUT_MESSAGE.outputMessage);

    Array.from({ length: attempt }).forEach(() => {
      carNames.forEach((carName) => {
        this.moveCar.race(carName);
        Console.print(`${carName} : ${this.forwardStatus.get(carName)}`);
      });

      Console.print(OUTPUT_MESSAGE.enter);
    });

    this.winner.getRaceWinner();
  };
}

export default RaceResult;
