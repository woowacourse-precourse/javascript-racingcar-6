import { Console } from '@woowacourse/mission-utils';
import Inputs from './input/Inputs.js';
import RunRace from './runRace/RunRace.js';

class App {
  constructor() {
    // this.cars = [];
    // this.tryCount = 0;
    this.inputs = new Inputs();
  }

  async play() {
    const cars = await this.inputs.returnCarNames();
    const tryCount = await this.inputs.getTryCount();
    Console.print('\n실행 결과');
    new RunRace().runRace(cars, tryCount);
  }
}

export default App;
