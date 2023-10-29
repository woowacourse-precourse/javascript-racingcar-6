import { Console } from '@woowacourse/mission-utils';

import Car from './Car.js';

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
      return this.validateCarNames(input);
    }

    return this.validateTotalRounds(input);
  }

  validateCarNames(input) {
    if (input === '') {
      throw new Error('[ERROR] 입력값이 없습니다.');
    }

    if (input.indexOf(' ') !== -1) {
      throw new Error('[ERROR] 입력값에 공백이 포함되었습니다.');
    }

    const cars = input.split(',').filter((v) => v);

    if (cars.length < 2) {
      throw new Error('[ERROR] 자동차는 최소 2대여야합니다.');
    }

    if (new Set(cars).size !== cars.length) {
      throw new Error('[ERROR] 중복된 자동차가 존재합니다.');
    }

    const isExceed = cars.some((car) => car.length > 5);

    if (isExceed) {
      throw new Error('[ERROR] 각 자동차명의 길이는 최대 5자입니다.');
    }

    return cars;
  }

  validateTotalRounds(input) {
    const result = Number(input);

    if (isNaN(result)) {
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    }

    return result;
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
