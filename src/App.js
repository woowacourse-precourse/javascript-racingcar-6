import { Random, Console } from '@woowacourse/mission-utils';
import { isValidCarNames, isValidMoveChanceCount } from './utils.js';
import { INQUIRY, RESULT, UTILITY } from './messages.js';

class App {
  constructor() {
    this.carNamesAndDistanceMap = new Map();
  }

  async setCarNames() {
    const carNamesString = await Console.readLineAsync(INQUIRY.CAR_NAME);

    if (isValidCarNames(carNamesString)) {
      const carNamesArray = carNamesString.split(',');

      for (const carName of carNamesArray) {
        this.carNamesAndDistanceMap.set(carName, 0);
      }
    }
  }

  async setMoveChanceCount() {
    const moveChanceCountString = await Console.readLineAsync(
      INQUIRY.MOVE_CHANCE
    );

    if (isValidMoveChanceCount(moveChanceCountString)) {
      this.moveChanceCount = Number(moveChanceCountString);
    }

    Console.print(UTILITY.EMPTY);
  }

  printDistance(carNamesAndDistanceMap) {
    for (const [carName, distance] of carNamesAndDistanceMap) {
      Console.print(`${carName} : ${'-'.repeat(distance)}`);
    }

    Console.print(UTILITY.EMPTY);
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

    Console.print(RESULT.OUTPUT);

    while (this.moveChanceCount > 0) {
      this.moveChanceCount -= 1;
      this.move(this.carNamesAndDistanceMap);
    }

    const winners = this.getWinners().join(', ');

    Console.print(`${RESULT.WINNERS} ${winners}`);
  }
}

export default App;
