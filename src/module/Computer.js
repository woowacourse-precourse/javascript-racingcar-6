import {MissionUtils} from '@woowacourse/mission-utils';
import Car from './Car.js';

class Computer {
  #carList;
  #round;

  constructor() {
    this.#carList = [];
    this.#round = 0;
  }

  set round(input) {
    if (!Number.isInteger(input) || input <= 0) {
      throw new Error('[ERROR] 0보다 큰 정수가 아님');
    }

    this.#round = input;
  }

  get round() {
    return this.#round;
  }

  get carList() {
    return this.#carList;
  }

  pushCarList(input) {
    const data = input.split(',');

    data.forEach((e) => {
      let car = new Car();

      car.name = e;
      this.#carList.push(car);
    });
  }

  async start() {
    const carNames = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const gameRound = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?');

    MissionUtils.Console.print('\n실행 결과');

    this.#round = gameRound;
    this.pushCarList(carNames);
  }

  judgeRandomNumber() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);

    return randomNumber >= 4 ? true : false;
  }
}

export default Computer;
