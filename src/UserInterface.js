import { Console } from '@woowacourse/mission-utils';
import MESSAGES from './Messages.js';

class UserInterface {
  static async getCarNames() {
    const input = await Console.readLineAsync(MESSAGES.INPUT_CAR_NAMES);
    const carNames = UserInterface.validateCarNames(input);
    return carNames;
  }

  static validateCarNames(names) {
    const carNames = names.split(',').map((name) => name.trim());

    const uniqueCarNames = new Set(carNames);
    if (carNames.length === 1) {
      throw new Error(MESSAGES.ERROR_CAR_COUNT);
    }

    if (uniqueCarNames.size !== carNames.length) {
      throw new Error(MESSAGES.ERROR_DUPLICATE_CAR_NAME);
    }

    if (carNames.some((name) => name.length === 0)) {
      throw new Error(MESSAGES.ERROR_BLANK_CAR_NAME);
    }

    carNames.forEach((carName) => {
      if (carName.length > 5) {
        throw new Error(MESSAGES.ERROR_CAR_NAME_LENGTH);
      }
    });
    return carNames;
  }

  static async getRaceRounds() {
    const input = await Console.readLineAsync(MESSAGES.INPUT_RACE_ROUNDS);
    const rounds = UserInterface.validateRounds(input);
    return rounds;
  }

  static validateRounds(rounds) {
    const parsedRounds = parseInt(rounds, 10);
    if (
      Number.isNaN(parsedRounds)
      || parsedRounds <= 0
      || parsedRounds.toString() !== rounds
    ) {
      throw new Error(MESSAGES.ERROR_INVALID_ROUNDS);
    }
    return parsedRounds;
  }

  static printRoundResults(carStatuses) {
    carStatuses.forEach((carStatus) => {
      const forwardText = '-'.repeat(carStatus.distance);
      Console.print(`${carStatus.carName} : ${forwardText}`);
    });
    Console.print('');
  }

  static printWinners(winners) {
    if (winners.length === 0) {
      Console.print(MESSAGES.NO_WINNERS);
      return;
    }

    const winnerText = winners.join(', ');
    Console.print(MESSAGES.FINAL_WINNERS + winnerText);
  }
}

export default UserInterface;
