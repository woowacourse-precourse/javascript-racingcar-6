import { Console, Random } from '@woowacourse/mission-utils';
import Car from './Car';

export default class CarRacingGame {
  #carNameArray;

  async gameStart() {
    const carNames = await CarRacingGame.getCarNames().catch((error) => {
      throw error;
    });
    this.#carNameArray = CarRacingGame.carNamesToCarNameArray(carNames);
    let tryCount = await CarRacingGame.getTryCount()
      .then(CarRacingGame.checkValidTryCount)
      .catch((error) => {
        throw error;
      });
      Console.print('\n실행 결과');
    while (tryCount > 0) {
      this.tryAdvance();
      this.printEachResult();
      tryCount -= 1;
    }
    this.printWinners();
  }

  static carNamesToCarNameArray(carNames = '') {
    return carNames.split(',').map((carName) => {
      const trimCarName = carName.trim();
      if (trimCarName.length > 5 || trimCarName.length === 0) {
        throw new Error('[ERROR] 자동차 이름이 5문자 초과입니다.');
      }
      return new Car(trimCarName);
    });
  }

  tryAdvance() {
    this.#carNameArray.forEach((car) => {
      if (CarRacingGame.isAdvance()) {
        car.plusAdvanceCount();
      }
    });
  }

  static isAdvance() {
    return Random.pickNumberInRange(0, 9) >= 4;
  }

  static checkValidTryCount(tryCount = 0) {
    if (Number(tryCount) <= 0 || !Number.isInteger(Number(tryCount))) {
      throw new Error('[ERROR] 시도 횟수 이상');
    }
    return tryCount;
  }

  printEachResult() {
    this.#carNameArray.forEach((car) => {
      const advances = '-'.repeat(car.getAdvanceCount());
      Console.print(`${car.getName()} : ${advances}`);
    });
    Console.print('');
  }

  printWinners() {
    const maxAdvanceCount = Math.max(
      ...this.#carNameArray.map((car) => car.getAdvanceCount())
    );
    const winners = this.#carNameArray.filter(
      (car) => car.getAdvanceCount() === maxAdvanceCount
    );
    const winnerNames = winners.map((car) => car.getName()).join(', ');
    Console.print(`최종 우승자 : ${winnerNames}`);
  }

  getCarNameArray() {
    return [...this.#carNameArray];
  }

  static async getCarNames() {
    try {
      const carNames = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
      );
      return carNames;
    } catch (error) {
      throw new Error('[ERROR]');
    }
  }

  static async getTryCount() {
    try {
      const tryCount = await Console.readLineAsync(
        '시도할 횟수는 몇 회인가요?'
      );
      return tryCount;
    } catch (error) {
      throw new Error('[ERROR]');
    }
  }
}
