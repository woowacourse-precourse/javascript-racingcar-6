import { Console } from '@woowacourse/mission-utils';
import { parseNames } from '../utils/common.js';
import { validateNameShouldBeLessThan5 } from '../utils/validation.js';

class GameConsole {
  static async getCarNames() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const parsedNames = parseNames(input);

    validateNameShouldBeLessThan5(parsedNames);

    return parsedNames;
  }
}

export default GameConsole;
