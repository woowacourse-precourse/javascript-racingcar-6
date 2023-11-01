import { Random, Console } from '@woowacourse/mission-utils';

class RacingGame {
  /**
   * @constructor
   * @param {string} carNames - 자동차이름을 (,)로 구분하는 문자열.
   * @param {number} roundCount - 게임에서 라운드를 진행하는 횟수.
   */
  constructor(carNames, roundCount) {
    this.carNames = carNames;
    this.roundCount = roundCount;
    this.#initialize();
  }

  #initialize() {
    this.winner = [];
    this.carNameList = this.carNames.split(',');
    this.carPosition = {};

    this.carNameList.forEach((carName) => {
      this.carPosition[carName] = 0;
    });
  }

  isMovingForward() {
    return Random.pickNumberInRange(0, 9) >= 4;
  }

  movingCarPosition() {
    this.carNameList.forEach((carName) => {
      if (this.isMovingForward()) {
        this.carPosition[carName] += 1;
      }
    });
  }

  #printCarPosition() {
    for (const [carName, distance] of Object.entries(this.carPosition)) {
      Console.print(`${carName} : ${'-'.repeat(distance)}`);
    }

    Console.print('');
  }

  playRound() {
    this.movingCarPosition();
    this.#printCarPosition();
  }

  calculateWinner() {
    const maxDistance = Math.max(...Object.values(this.carPosition));

    for (const [carName, distance] of Object.entries(this.carPosition)) {
      if (distance === maxDistance) this.winner.push(carName);
    }
  }

  printWinner() {
    Console.print(`최종 우승자 : ${this.winner.join(', ')}`);
  }

  start() {
    Console.print('\n실행 결과');

    for (let round = 0; round < this.roundCount; round++) {
      this.playRound();
    }
  }
}

export default RacingGame;
