import { Random, Console } from '@woowacourse/mission-utils';
import Validation from './validation.js';

class App {
  constructor() {
    this.carList = [];
    this.times = 0;
  }

  async userInputCarAndTimes() {
    const inputCar = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const inputCarList = inputCar.split(',');
    Validation.strSize(inputCarList);
    const inputTimes = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    Validation.isItNumber(inputTimes);
    inputCarList.forEach((element) => {
      this.carList.push({
        name: element,
        distance: 0,
        going: '-',
      });
    });
    this.times = inputTimes;
  }

  updateObjectDistance() {
    this.carList.forEach((element) => {
      const RandomNum = Random.pickNumberInRange(0, 9);
      if (RandomNum >= 4) {
        element.distance += RandomNum;
        element.going += '-';
      }
    });
  }

  updateAsTimes() {
    for (let i = 0; i < this.times; i += 1) {
      this.updateObjectDistance();
      this.printCarListAsTimes();
    }
  }

  printCarListAsTimes() {
    this.carList.forEach((element) => {
      Console.print(`${element.name} : ${element.going}`);
    });
    Console.print('');
  }

  printWinner() {
    const winner = [];
    let maxDistance = 0;
    this.carList.forEach((element) => {
      if (maxDistance < element.distance) {
        maxDistance = element.distance;
      }
    });
    this.carList.forEach((element) => {
      if (element.distance === maxDistance) {
        winner.push(element.name);
      }
    });
    Console.print(`최종 우승자 : ${winner.join(', ')}`);
  }

  async play() {
    await this.userInputCarAndTimes();
    Console.print('');
    Console.print('실행 결과');
    this.updateAsTimes();
    this.printWinner();
  }
}

export default App;
