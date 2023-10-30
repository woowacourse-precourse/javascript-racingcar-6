import { Console, Random } from '@woowacourse/mission-utils';
import Input from './Input.js';

class App {
  constructor() {
    this.carDictionary = {};
  }

  async play() {
    try {
      const input = new Input();
      const carArr = await input.getCarName();
      const inputNumber = await input.getRepeatNumber();

      this.initializeCarDictionary(carArr);

      Console.print('\n실행 결과');
      for (let i = 0; i < inputNumber; i++) {
        this.runRace(carArr);
        // Console.print(carDictionary);
        this.printRace();
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

  generateRandomNumber() {
    const startInclusive = 0;
    const endInclusive = 9;
    let randomNumber = Random.pickNumberInRange(startInclusive, endInclusive);

    return randomNumber >= 4;
  }

  runRace(carArr) {
    carArr.forEach(key => {
      if (this.generateRandomNumber()) {
        this.carDictionary[key] += 1;
      }
    });
  }

  printRace() {
    Object.entries(this.carDictionary).forEach(([key, value]) => {
      console.log(`${key} : ${'-'.repeat(value)}`);
    });
    Console.print('');
  }
}

export default App;
