import { Console } from '@woowacourse/mission-utils';
import RunRace from './runRace/RunRace.js';
import Inputs from './input/Inputs.js';
import ReturnWinner from './runRace/ReturnWinner.js';

class CarRacingGame {
  constructor() {
    this.cars = [];
    this.tryCount = 0;
    this.inputs = new Inputs();
  }

  async run() {
    this.cars = await this.inputs.returnCarNames();
    this.tryCount = await this.inputs.getTryCount();
    this.racing();
  }

  racing() {
    Console.print('\n실행 결과');
    const returnRacingProgress = new RunRace().runRace(this.cars, this.tryCount);
    this.racingResult(this.cars, returnRacingProgress);
  }

  racingResult(returnRacingProgress) {
    new ReturnWinner(this.cars).printWinners(returnRacingProgress);
  }
}

export default CarRacingGame;
