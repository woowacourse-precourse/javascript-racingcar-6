import { Console } from '@woowacourse/mission-utils';
import Car from '../Model/Car.js';
import Generator from '../Model/Generator.js';

class Output {
  /**
   * @param {string} carName
   * @param {num} carDistance
   */
  static printCarState(carName, carDistance) {
    Console.print(carName + ' : ' + '-'.repeat(carDistance));
  }

  /**
   * racing후 cars
   * @param {[Car]} cars
   */
  static printWinners(cars) {
    const winners = Generator.winnerGenerator(cars);
    const winnersToString = winners.map((winner) => winner.name).join(', ');

    Console.print('최종 우승자 : ' + winnersToString);
  }
}

export default Output;
