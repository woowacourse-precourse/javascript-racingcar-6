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

  // 게임 시작시 멘트 소개 및 설정 :: init 역할
  async start() {
    const carNames = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const gameRound = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?');

    this.#round = gameRound;
    this.pushCarList(carNames);
  }

  judgeRandomNumber() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);

    return randomNumber >= 4 ? true : false;
  }

  printResult() {
    const carAmount = this.#carList.length;

    for (let i = 0; i < carAmount; i += 1) {
      this.#carList[i].print();
    }

    MissionUtils.Console.print('');
  }

  playRound() {
    const carAmount = this.#carList.length;

    for (let i = 0; i < carAmount; i += 1) {
      this.#carList[i].goingCount = this.judgeRandomNumber();
    }

    this.printResult();
  }

  // Car 객체 순환하며, goingCount 비교 후, 가장 높은 객체들의 이름 출력
  judgeWinner() {
    const carAmount = this.#carList.length;
    const winnerList = [];
    let maxDistance = 0;
    let goingCount = 0;
    let name = '';

    for (let i = 0; i < carAmount; i += 1) {
      goingCount = this.#carList[i].goingCount;
      name = this.#carList[i].name;

      if (maxDistance < goingCount) {
        winnerList.splice(0);
        maxDistance = goingCount;
        winnerList.push(name);
      } else if (maxDistance === goingCount) {
        winnerList.push(name);
      }
    }

    MissionUtils.Console.print(`최종 우승자 : ${winnerList.join(', ')}`);
  }

  // 실행 결과 출력 후 종료
  finish() {
    MissionUtils.Console.print('');
    MissionUtils.Console.print('실행 결과');

    for (let i = 0; i < this.#round; i += 1) this.playRound();

    this.judgeWinner();
  }
}

export default Computer;
