import { Console } from '@woowacourse/mission-utils';

class RacingGame {
  statusMark = '-';

  async getRaceTimes() {
    const raceTimes = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    return Number(raceTimes);
  }

  async playRacing(carsArray) {
    carsArray.forEach((car) => car.move());
  }

  async showGameStatus(carsArray) {
    carsArray.forEach((car) => {
      Console.print(`${car.name} : ${this.statusMark.repeat(car.location)}`);
    });
  }
}

export default RacingGame;
