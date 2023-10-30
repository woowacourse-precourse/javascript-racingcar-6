import { Console } from '@woowacourse/mission-utils';
import Input from './Input.js';
import Race from './Race.js';
import Result from './Result.js';

class App {
  constructor() {
    this.carDictionary = {};
  }

  async play() {
    const input = new Input();
    const race = new Race();
    const result = new Result();

    const carArr = await input.getCarName();
    const inputNumber = await input.getRepeatNumber();

    this.initializeCarDictionary(carArr);

    Console.print('\n실행 결과');
    for (let i = 0; i < inputNumber; i++) {
      race.runRace(carArr, this.carDictionary);
      race.printRace(this.carDictionary);
    }

    const winners = result.determineWinner(this.carDictionary);
    result.printWinner(winners);
  }

  initializeCarDictionary(carArr) {
    carArr.forEach(name => {
      this.carDictionary[name] = 0;
    });
  }
}

export default App;
