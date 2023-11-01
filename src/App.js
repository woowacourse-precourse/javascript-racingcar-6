import { Console, Random } from '@woowacourse/mission-utils';
import {
  CAR_INPUT_PATTERN,
  CAR_INPUT_DUPLICATE_PATTERN,
  RETRY_INPUT_PATTERN,
  validate,
} from './validate.js';

const CAR_ADVANCE_THRESHOLD = 4;

class App {
  async play() {
    const cars = await this.getCars();
    const retry = await this.getRetry();

    const distances = this.startRace(cars, retry);

    const winners = this.getWinners(distances);

    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }

  async getCars() {
    Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const input = (await Console.readLineAsync('')).trim();
    if (!validate(input, CAR_INPUT_PATTERN)) {
      throw new Error('[ERROR] 입력이 잘못된 형식입니다.');
    }
    if (validate(input, CAR_INPUT_DUPLICATE_PATTERN)) {
      throw new Error('[ERROR] 중복된 입력값입니다.');
    }
    const cars = input.split(',');
    return cars;
  }

  async getRetry() {
    Console.print('시도할 횟수는 몇 회인가요?');
    const input = (await Console.readLineAsync('')).trim();
    if (!validate(input, RETRY_INPUT_PATTERN)) {
      throw new Error('[ERROR] 입력이 잘못된 형식입니다.');
    }
    const retry = Number(input);
    return retry;
  }

  startRace(cars, retry) {
    Console.print('실행 결과');
    const distances = Object.fromEntries(cars.map((k) => [k, 0]));
    for (let i = 0; i < retry; i += 1) {
      cars.forEach((car) => {
        distances[car] += Random.pickNumberInRange(0, 9) >= CAR_ADVANCE_THRESHOLD;
        Console.print(`${car} : ${'-'.repeat(distances[car])}`);
      });
      Console.print('');
    }
    return distances;
  }

  getWinners(distances) {
    const winners = Object.keys(distances).reduce((acc, car) => {
      if (acc.length === 0) {
        return [car];
      }
      if (distances[car] > distances[acc[0]]) {
        return [car];
      }
      if (distances[car] === distances[acc[0]]) {
        return [...acc, car];
      }
      return acc;
    }, []);
    return winners;
  }
}

export default App;
