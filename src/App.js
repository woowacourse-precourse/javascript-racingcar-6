import { Random, Console } from '@woowacourse/mission-utils';
import { isValidCarNames, isValidMoveChanceCount } from './utils.js';

class App {
  constructor() {
    this.carNamesAndDistanceMap = new Map();
  }

  async setCarNames() {
    const carNamesString = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );

    if (isValidCarNames(carNamesString)) {
      const carNamesArray = carNamesString.split(',');

      for (const carName of carNamesArray) {
        this.carNamesAndDistanceMap.set(carName, 0);
      }
    }
  }

  async setMoveChanceCount() {
    const moveChanceCountString = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );

    if (isValidMoveChanceCount(moveChanceCountString)) {
      this.moveChanceCount = Number(moveChanceCountString);
    }

    Console.print('');
  }

  printDistance(carNamesAndDistanceMap) {
    for (const [carName, distance] of carNamesAndDistanceMap) {
      Console.print(`${carName} : ${'-'.repeat(distance)}`);
    }
    Console.print('');
  }

  move(carNamesAndDistanceMap) {
    for (const [carName, distance] of carNamesAndDistanceMap) {
      const randomInteger = Random.pickNumberInRange(0, 9);

      if (randomInteger >= 4) {
        const distanceAfterMove = distance + 1;
        carNamesAndDistanceMap.set(carName, distanceAfterMove);
      }
    }

    this.printDistance(carNamesAndDistanceMap);
  }

  getWinners() {
    const maxDistance = Math.max(...this.carNamesAndDistanceMap.values());
    const winnersEntries = Array.from(this.carNamesAndDistanceMap).filter(
      (carNameAndDistance) => carNameAndDistance[1] === maxDistance
    );

    return winnersEntries.map((winnerEntry) => winnerEntry[0]);
  }

  async play() {
    await this.setCarNames();
    await this.setMoveChanceCount();

    Console.print('실행 결과');

    while (this.moveChanceCount > 0) {
      this.moveChanceCount -= 1;
      this.move(this.carNamesAndDistanceMap);
    }

    const winners = this.getWinners().join(', ');

    Console.print(`최종 우승자 : ${winners}`);
  }
}

export default App;
