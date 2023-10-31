import { Console } from '@woowacourse/mission-utils';
import {
  getDistanceString,
  parseNames,
  parseNumber,
  getWinners,
} from '../utils/common.js';
import { validateNumber } from '../utils/validation.js';

class GameConsole {
  static async getCarNames() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const parsedNames = parseNames(input);

    return parsedNames;
  }

  static async getRound() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const round = parseNumber(input);

    return round;
  }

  static printRoundResult(cars) {
    cars.forEach((car) =>
      Console.print(`${car.name} : ${getDistanceString(car.distance)}`)
    );

    this.printEmptyLine();
  }

  static printGameWinner(cars) {
    const winners = getWinners(cars);

    if (winners.length === 0) Console.print(`최종 우승자 : ${winners[0]}`);
    else Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }

  static printEmptyLine() {
    Console.print('');
  }
}

export default GameConsole;
