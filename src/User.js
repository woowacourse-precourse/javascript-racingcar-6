import { Console } from '@woowacourse/mission-utils';
import MESSAGE from './constants/message.js';

class User {
  async getRacingCarList() {
    const racingCarList = await Console.readLineAsync(MESSAGE.racingCar + '\n');
    // TODO: 예외처리
    return racingCarList.split(',');
  }

  async getRaceNumber() {
    const raceNumber = await Console.readLineAsync(MESSAGE.raceNumber + '\n');
    // TODO: 예외처리
    return raceNumber;
  }
}

export default User;
