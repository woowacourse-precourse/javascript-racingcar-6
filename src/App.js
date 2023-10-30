import { Console, Random } from '@woowacourse/mission-utils';
import Input from './Input.js';

class App {
  async play() {
    try {
      const input = new Input(); // Input 클래스의 인스턴스를 생성
      const carArr = await input.getCarName();
      const inputNumber = await input.getRepeatNumber();

      const carDictionary = {};
      carArr.forEach(name => {
        carDictionary[name] = 0;
      });

      Console.print('\n실행 결과');
      for (let i = 0; i < inputNumber; i++) {
        this.runRace(carArr, carDictionary);
        // Console.print(carDictionary);
        this.printRace(carDictionary);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  generateRandomNumber() {
    const startInclusive = 0;
    const endInclusive = 9;
    let randomNumber = Random.pickNumberInRange(startInclusive, endInclusive);

    if (randomNumber >= 4) {
      return true;
    }
    return false;
  }

  runRace(carArr, carDictionary) {
    carArr.forEach(key => {
      if (this.generateRandomNumber()) {
        carDictionary[key] += 1;
      }
    });
  }

  printRace(carDictionary) {
    Object.entries(carDictionary).forEach(([key, value]) => {
      console.log(`${key} : ${'-'.repeat(value)}`);
    });
    Console.print('');
  }
}

export default App;
