import { Random, Console } from '@woowacourse/mission-utils';

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
    const inputTimes = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    inputCarList.forEach((element) => {
      this.carList.push({
        name: element,
        distance: 0,
      });
    });
    this.times = inputTimes;
  }

  updateObjectDistance() {
    this.carList.forEach((element) => {
      const RandomNum = Random.pickNumberInRange(0, 9);
      if (RandomNum >= 4) {
        element.distance += RandomNum;
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
      Console.print(`${element.name} : ${element.distance}`);
    });
    Console.print('');
  }

  async play() {
    await this.userInputCarAndTimes();
    Console.print('');
    Console.print('실행 결과');
    this.updateAsTimes();
  }
}

export default App;
