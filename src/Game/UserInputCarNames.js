import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE, ERROR } from '../constants/index.js';

export class UserInputCarNames {
  static async getCarNames() {
    const CARS = [];
    const NAMES = await MissionUtils.Console.readLineAsync(
      MESSAGE.carNameForStart,
    );
    NAMES.split(',').forEach((name) => {
      if (name.length > 5) {
        throw new Error(ERROR.carNameInputLong);
      }
      CARS.push([name, '']);
    });
    return CARS;
  }
}
