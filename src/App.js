import { Console } from '@woowacourse/mission-utils';
import Input from './Input.js';
import Race from './Race.js';

class App {
  constructor() {
    this.carDictionary = {};
  }

  async play() {
    try {
      const input = new Input();
      const race = new Race();

      const carArr = await input.getCarName();
      const inputNumber = await input.getRepeatNumber();

      this.initializeCarDictionary(carArr);

      Console.print('\n실행 결과');
      for (let i = 0; i < inputNumber; i++) {
        race.runRace(carArr, this.carDictionary);
        // Console.print(this.carDictionary);
        race.printRace(this.carDictionary);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  initializeCarDictionary(carArr) {
    carArr.forEach(name => {
      this.carDictionary[name] = 0;
    });
  }
}

export default App;
