import { Console } from '@woowacourse/mission-utils';

class Car {
  #racers;

  constructor() {
    this.#racers = [];
  }

  async inputRacers() {
    const racers = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    this.#racers = racers.split(',');
    Console.print(this.#racers);
  }
}

export default Car;
