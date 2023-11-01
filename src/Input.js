import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './Constant.js';
import CheckError from './CheckError.js';

class Input {
  static async returnArrayOfPlayers() {
    const playerInput = await Console.readLineAsync(MESSAGE.NAME_INPUT);
    const players = playerInput.split(',').map((name) => {
      const trimmed = name.trim();
      CheckError.isLessThanMaxNameLength(trimmed);
      return trimmed;
    });

    return players;
  }

  static async returnNumberOfGames() {
    const input = await Console.readLineAsync(MESSAGE.NUMBER_INPUT);
    const trimmed = Number(input.trim());
    CheckError.isNumber(trimmed);

    return trimmed;
  }
}

export default Input;