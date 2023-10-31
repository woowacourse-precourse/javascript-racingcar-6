import { MissionUtils } from '@woowacourse/mission-utils';

const INPUT_CAR_NAMES_MSG =
  '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)';
const INPUT_ATTEMPT_TIMES_MSG = '시도할 횟수는 몇 회인가요?';
const INPUT_ERROR_MSG = '[ERROR] 입력 받는 도중 에러가 발생했습니다.';
const OUTPUT_WINNERS_MSG = '최종 우승자 : ';

class App {
  async getCarNameArr() {
    const carNames =
      await MissionUtils.Console.readLineAsync(INPUT_CAR_NAMES_MSG);

    const carNameArr = carNames.split(',');

    carNameArr.forEach(carName => {
      if (carName.length > 5) throw new Error(INPUT_ERROR_MSG);
    });

    return carNameArr;
  }

  async getAttemptTimes() {
    const attemptTimes = Number(
      await MissionUtils.Console.readLineAsync(INPUT_ATTEMPT_TIMES_MSG),
    );
    if (Number.isNaN(attemptTimes)) {
      throw new Error(INPUT_ERROR_MSG);
    }
    return attemptTimes;
  }

  async printShifts(carArr, attemptTimes) {
    async function getShift(attemptTimes) {
      let shift = 0;

      for (let i = 0; i < attemptTimes; i++) {
        if ((await MissionUtils.Random.pickNumberInRange(0, 9)) >= 4) shift++;
      }
      return shift;
    }

    let maxShift = -1;
    let winner = [];

    for (let i = 0; i < carArr.length; i++) {
      const shift = await getShift(attemptTimes);
      if (shift > maxShift) {
        maxShift = shift;
        winner = [carArr[i]];
      } else if (shift === maxShift) winner.push(carArr[i]);

      MissionUtils.Console.print(`${carArr[i]} : ${'-'.repeat(shift)}`);
    }

    return winner;
  }

  async play() {
    const carNameArr = await this.getCarNameArr();
    const attemptTimes = await this.getAttemptTimes();
    const winners = await this.printShifts(carNameArr, attemptTimes);
    MissionUtils.Console.print(
      `${OUTPUT_WINNERS_MSG}` + `${winners.join(', ')}`,
    );
  }
}

export default App;
