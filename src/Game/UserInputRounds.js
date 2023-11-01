import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE, ERROR } from '../constants/index.js';

export class UserInputRounds {
  static async getNumberOfRounds() {
    const COUNTS = await MissionUtils.Console.readLineAsync(
      MESSAGE.raceRoundForStart,
    );
    const ROUNDS = parseInt(COUNTS, 10);
    if (isNaN(ROUNDS)) {
      throw new Error(ERROR.roundInputNumber);
    } else if (ROUNDS <= 0) {
      throw new Error(ERROR.roundInputPositive);
    }
    return ROUNDS;
  }
}
