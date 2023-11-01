import { Console } from '@woowacourse/mission-utils';
import { MESSAGES, STRINGS } from './Constants';

class Screen {
  static async inputNames() {
    Console.print(MESSAGES.raceNameInputMessage);
    const nameInput = await Console.readLineAsync();
    const names = nameInput.split(',').map((name) => name.trim());

    names.forEach((name) => {
      if (name.length === 0 || name.length > 5) {
        throw new Error(MESSAGES.invalidNameErrorMessage);
      }
    });

    if (names.length !== new Set(names).size) {
      throw new Error(MESSAGES.duplicatedNameErrorMessage);
    }

    return names;
  }

  static async inputCount() {
    Console.print(MESSAGES.raceCountInputMessage);
    const count = Number(await Console.readLineAsync());

    if (!Number.isInteger(count) || count <= 0) {
      throw new Error(MESSAGES.invalidCountErrorMessage);
    }

    return count;
  }

  static printResultMessage() {
    Console.print(`\n${STRINGS.raceResult}`);
  }

  static printResult(car) {
    const { name, moveCount } = car;
    Console.print(`${name} : ${STRINGS.carMovingToken.repeat(moveCount)}`);
  }

  static printNewline() {
    Console.print('\n');
  }

  static printWinnersName(winners) {
    Console.print(`${STRINGS.raceWinner} : ${winners.join(', ')}`);
  }
}

export default Screen;
