import { Console, Random } from '@woowacourse/mission-utils';

const INPUT_CAR_NAMES_MSG =
  '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)';
const INPUT_ATTEMPT_TIMES_MSG = '시도할 횟수는 몇 회인가요?';
const INPUT_ERROR_MSG = '[ERROR] 입력 받는 도중 에러가 발생했습니다.';
const OUTPUT_WINNERS_MSG = '최종 우승자 : ';

class App {
  async getCarNameArr() {
    const carNames = await Console.readLineAsync(INPUT_CAR_NAMES_MSG);

    const carNameArr = carNames.split(',');

    carNameArr.forEach(carName => {
      if (carName.length > 5) throw new Error(INPUT_ERROR_MSG);
    });

    return carNameArr;
  }

  async getAttemptTimes() {
    const attemptTimes = Number(
      await Console.readLineAsync(INPUT_ATTEMPT_TIMES_MSG),
    );
    if (Number.isNaN(attemptTimes)) {
      throw new Error(INPUT_ERROR_MSG);
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
    Console.print(`${OUTPUT_WINNERS_MSG}` + `${winners.join(', ')}`);
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
