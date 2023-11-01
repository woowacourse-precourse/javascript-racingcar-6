import { Console } from '@woowacourse/mission-utils';
import MoveCar from './MoveCar';
import Winner from './Winner';

class RaceResult {
  constructor() {
    this.forward = new Map();
    this.moveCar = new MoveCar(this.forward);
    this.winner = new Winner(this.forward);
  }

  getRaceResult = (cars, input) => {
    Console.print('\n실행 결과');

    for (let i = 0; i < input; i++) {
      cars.forEach((car) => {
        this.moveCar.race(car);
        Console.print(`${car} : ${this.forward.get(car)}`);
      });
      Console.print('\n');
    }
    this.winner.getRaceWinner();
  };
}

export default RaceResult;
