import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/Constants';
import MoveCar from '../RaceGame/MoveCar';
import Winner from '../RaceGame/Winner';

class RaceResult {
  constructor() {
    this.forward = new Map();
    this.moveCar = new MoveCar(this.forward);
    this.winner = new Winner(this.forward);
  }

  getRaceResult = (cars, input) => {
    Console.print(OUTPUT_MESSAGE.outputMessage);

    Array.from({ length: input }).forEach(() => {
      cars.forEach((car) => {
        this.moveCar.race(car);
        Console.print(`${car} : ${this.forward.get(car)}`);
      });

      Console.print(OUTPUT_MESSAGE.enter);
    });

    this.winner.getRaceWinner();
  };
}

export default RaceResult;
