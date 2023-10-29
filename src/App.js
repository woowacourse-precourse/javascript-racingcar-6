import { Console } from '@woowacourse/mission-utils';

import Car from './Car.js';
import { validateCarNames, validateTotalRounds } from './validateInput.js';

class App {
  async play() {
    const carNames = await this.getUserInput('name');
    const totalRounds = await this.getUserInput('round');
    const cars = carNames.map((carName) => new Car(carName));

    this.startRace(cars, totalRounds);
    this.printWinners(cars);
  }

  async getUserInput(flag) {
    const message =
      flag === 'name'
        ? '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
        : '시도할 횟수는 몇 회인가요?\n';
    const input = await Console.readLineAsync(message);

    if (flag === 'name') {
      return validateCarNames(input);
    }

    return validateTotalRounds(input);
  }

  startRace(cars, totalRounds) {
    Console.print('\n실행 결과');

    for (let i = 0; i < totalRounds; i++) {
      cars.forEach((car) => {
        car.moveOrStop();
        Console.print(`${car.name} : ${car.progress}`);
      });

      Console.print('');
    }
  }

  printWinners(cars) {
    const winners = this.getWinners(cars);

    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }

  getWinners(cars) {
    const carDistances = cars.map((car) => car.progress.length);
    const maxDistance = Math.max(...carDistances);

    const winners = cars
      .filter((car) => car.progress.length === maxDistance)
      .map((car) => car.name);

    return winners;
  }
}

export default App;
