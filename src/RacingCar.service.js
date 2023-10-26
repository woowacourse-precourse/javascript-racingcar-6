import { Random, Console } from '@woowacourse/mission-utils';

export default class RacingCarService {
  async racingCarQuery() {
    const RACING_CAR_NAME_QUERY_INPUT = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    this.validateRacingCarNameQueryInput(
      RACING_CAR_NAME_QUERY_INPUT.split(',')
    );
    const RACING_CAR_TRY_QUERY_INPUT = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );
    this.validateRacingCarTryQueryInput(RACING_CAR_TRY_QUERY_INPUT);
    this.play(
      RACING_CAR_NAME_QUERY_INPUT.split(','),
      RACING_CAR_TRY_QUERY_INPUT
    );
  }

  validateRacingCarNameQueryInput(cars) {
    cars.forEach((car) => {
      if (car.length >= 5 || car.length === 0) {
        throw new Error('[ERROR] 이름은 1글자 이상 5글자 이하여야 합니다.');
      }
    });
    cars.forEach((car, index) => {
      if (cars.indexOf(car) !== index) {
        throw new Error('[ERROR] 이름은 유일해야 합니다.');
      }
    });
  }

  validateRacingCarTryQueryInput(tries) {
    if (Number.isNaN(+tries)) {
      throw new Error('[ERROR] 숫자를 입력하세요.');
    }
    if (+tries < 1) {
      throw new Error('[ERROR] 1 이상의 숫자를 입력하세요.');
    }
  }

  play(cars, tries) {
    Console.print('\n실행 결과');
    const result = {};
    cars.forEach((car) => {
      result[car] = '';
    });
    for (let i = 0; i < tries; ++i) {
      cars.forEach((car) => {
        result[car] += Random.pickNumberInRange(1, 9) >= 4 ? '-' : '';
        Console.print(`${car} : ${result[car]}`);
      });
      Console.print('');
    }
    this.printResult(result);
  }

  printResult(result) {
    let max = 0;
    for (const [key, value] of Object.entries(result)) {
      max = Math.max(value.length);
    }
    const winners = [];
    for (const [key, value] of Object.entries(result)) {
      if (value.length === max) {
        winners.push(key);
      }
    }
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}
