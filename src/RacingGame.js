import { Console } from '@woowacourse/mission-utils';

class RacingGame {
  async getRaceTimes() {
    const raceTimes = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    return Number(raceTimes);
  }

  async raceCars(carsArray) {
    carsArray.forEach((car) => car.move());
  }
}

export default RacingGame;
