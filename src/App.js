import { Console, Random } from '@woowacourse/mission-utils';
import { getValidRound, getValidCars } from './utils/getValidValue.js';

export default class App {
  constructor() {
    this.cars = [];
    this.totalRound = '';
    this.winner = [];
  }

  async play() {
    await this.getCarsName();
    await this.getTotalRound();
    Console.print('실행 결과');
    this.raceStart(this.cars, this.totalRound);
    this.findWinners(this.cars, this.winner);
    this.printWinners(this.winner);
  }

  async getCarsName() {
    const cars = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    this.car = getValidCars(cars);
  }

  async getTotalRound() {
    const round = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    this.totalRound = getValidRound(round);
  }

  raceStart(cars, totalRound) {
    for (let i = 0; i < totalRound; i++) {
      this.round(cars);
      this.printRoundResult(cars);
    }
  }

  round(cars) {
    for (const car of cars) {
      if (isMove()) {
        car.position++;
      }
    }
  }

  printRoundResult(cars) {
    Console.print('');

    for (const car of cars) {
      Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
    }
  }

  findWinners(cars, winner) {
    let maxPosition = 0;

    for (const car of cars) {
      if (car.position > maxPosition) {
        maxPosition = car.position;
      }
    }

    for (const car of cars) {
      if (car.position === maxPosition) {
        winner.push(car.name);
      }
    }
  }

  printWinners(winners) {
    const winnerNames = winners.join(', ');
    Console.print(`\n최종 우승자 : ${winnerNames}`);
  }
}

function isMove() {
  if (Random.pickNumberInRange(0, 9) > 3) return true;
}
