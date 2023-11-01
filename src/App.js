import { Console, Random } from '@woowacourse/mission-utils';
import message from './constants/message';

class App {
  async getCarNameArr() {
    const carNames = await Console.readLineAsync(message.inputCarName);

    const carNameArr = carNames.split(',');

    carNameArr.forEach(carName => {
      if (carName.length > 5) throw new Error(message.nameError);
    });

    return carNameArr;
  }

  async getAttemptTimes() {
    const attemptTimes = Number(
      await Console.readLineAsync(message.inputAttemptTimes),
    );
    if (Number.isNaN(attemptTimes)) {
      throw new Error(message.AttemptTimesError);
    }
    return attemptTimes;
  }

  async judgeShift(attemptTimes) {
    let shift = 0;

    for (let i = 0; i < attemptTimes; i++) {
      if ((await Random.pickNumberInRange(0, 9)) >= 4) shift++;
    }
    return shift;
  }

  async calculateShifts(carArr, attemptTimes) {
    const shifts = [];
    for (let i = 0; i < carArr.length; i++) {
      const shift = await this.judgeShift(attemptTimes);
      shifts.push({ name: carArr[i], shift });
    }
    return shifts;
  }

  printShifts(shifts) {
    for (const { name, shift } of shifts) {
      Console.print(`${name} : ${'-'.repeat(shift)}`);
    }
  }

  findWinners(shifts) {
    let maxShift = -1;
    let winners = [];

    for (const { name, shift } of shifts) {
      if (shift > maxShift) {
        maxShift = shift;
        winners = [name];
      } else if (shift === maxShift) {
        winners.push(name);
      }
    }

    return winners;
  }

  async printWinner(winners) {
    Console.print(`${message.winner}` + `${winners.join(', ')}`);
  }

  async play() {
    const carNameArr = await this.getCarNameArr();
    const attemptTimes = await this.getAttemptTimes();
    const shifts = await this.calculateShifts(carNameArr, attemptTimes);
    this.printShifts(shifts);
    const winners = this.findWinners(shifts);
    await this.printWinner(winners);
  }
}

export default App;
