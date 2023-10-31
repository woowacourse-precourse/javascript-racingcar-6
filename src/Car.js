import { Console } from '@woowacourse/mission-utils';

class Car {
  #racers;

  constructor() {
    this.#racers = [];
  }

  async startRacing() {
    await this.inputRacers();
  }

  async inputRacers() {
    const racers = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    this.checkValidation(racers);
  }

  checkValidation(racers) {
    if (
      !(
        /^[\w\s]{1,5}(?:,[\w\s]{1,5})*$/.test(racers) ||
        /^[\w\s]{1,5}$/.test(racers)
      )
    ) {
      throw new Error('유효하지 않은 입력');
    }
    if (racers.split(',').length !== new Set(racers.split(',')).size) {
      throw new Error('중복된 유저 입력');
    }
    this.#racers = racers.split(',');
  }
}

export default Car;
