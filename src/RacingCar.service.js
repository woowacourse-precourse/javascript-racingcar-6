import { Random, Console } from '@woowacourse/mission-utils';

export default class RacingCarService {
  async racingCarQuery() {
    const RACING_CAR_NAME_QUERY_INPUT = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );
    this.validateRacingCarNameQueryInput(
      RACING_CAR_NAME_QUERY_INPUT.split(',')
    );
    const RACING_CAR_TRY_QUERY_INPUT = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?'
    );
    this.validateRacingCarTryQueryInput(RACING_CAR_TRY_QUERY_INPUT);
    this.play();
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

  validateRacingCarTryQueryInput(tries) {}

  play() {}

  printResult() {}
}
