// import CarRacingGame from './CarRacingGame.js';

// class App {
//   async play() {
//     return new CarRacingGame().run();
//   }
// }

// export default App;

import { Console, Random } from '@woowacourse/mission-utils';
import Inputs from './input/Inputs';

class App {
  constructor() {
    this.cars = [];
    this.tryCount = 0;
    this.inputs = new Inputs();
  }

  async play() {
    this.cars = await this.inputs.returnCarNames();
    this.tryCount = await this.inputs.getTryCount();
    Console.print('\n실행 결과');
    this.runRace(cars, tryCount);
  }

  isInvalidName(name) {
    return name.length > 5 || !name;
  }

  async returnCarNames() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    const names = carNames.split(',').map((name) => name.trim());

    if (names.some(this.isInvalidName)) {
      throw new Error('[ERROR] 잘못된 입력입니다.');
    }

    return names;
  }

  async getTryCount() {
    const tryCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return parseInt(tryCount, 10);
  }

  runRace(cars, tryCount) {
    const progressList = new Array(cars.length).fill('');

    for (let i = 0; i < tryCount; i += 1) {
      cars.forEach((car, carIndex) => {
        progressList[carIndex] += this.generateRandomProgress();
        Console.print(`${car} : ${progressList[carIndex]}`);
      });
      Console.print('');
    }

    this.printWinners(cars, progressList);
  }

  printWinners = (cars, progressList) =>
    Console.print(`최종 우승자 : ${this.findWinners(cars, progressList).join(', ')}`);

  getRandomMove = () => Random.pickNumberInRange(0, 9);

  generateRandomProgress = () => (this.getRandomMove() >= 4 ? '-' : '');

  findWinners = (cars, progressList) =>
    cars.filter(
      (car, carIndex) => progressList[carIndex].length === this.maxProgress(progressList),
    );

  maxProgress = (progressList) => Math.max(...progressList.map((progress) => progress.length));
}

export default App;
