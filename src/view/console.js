import { Console } from '@woowacourse/mission-utils';
import { getDistanceString, parseNames, parseNumber } from '../utils/common.js';
import {
  validateNameShouldBeLessThan5,
  validateNumber,
} from '../utils/validation.js';

class GameConsole {
  static async getCarNames() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const parsedNames = parseNames(input);

    validateNameShouldBeLessThan5(parsedNames);

    return parsedNames;
  }

  static async getRound() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const round = parseNumber(input);

    validateNumber(round);

    return input;
  }

  static printRoundResult(cars) {
    cars.forEach((car) =>
      Console.print(`${car.name} : ${getDistanceString(car.distance)}`)
    );

    this.printEmptyLine();
  }

  static printEmptyLine() {
    Console.print('');
  }
}

export default GameConsole;
