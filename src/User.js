import { Console } from '@woowacourse/mission-utils';

class User {
  async inputCarName() {
    const cars = await Console.readLineAsync('');

    return cars.split(',').map(String);
  }
}

export default User;
