import { Console, Random } from '@woowacourse/mission-utils';
import Result from './Result.js';

class Play {
  constructor() {}
  racing(carList) {
    for (let i = 0; i < carList.length; i++) {
      const number = Random.pickNumberInRange(0, 9);
      if (number >= 4) {
        carList[i].go();
      }
      Console.print(`${carList[i].name} : ${'-'.repeat(carList[i].position)}`);
    }
    console.log('\r');
  }

  raceStart(numberOfTimes, carList) {
    const inputNumber = !Number.isNaN(numberOfTimes);
    const inputString = isNaN(numberOfTimes);
    Console.print('\n실행결과');
    if (inputNumber) {
      for (let i = 1; i <= numberOfTimes; i++) {
        this.racing(carList);
      }
    }
    if (inputString) {
      throw new Error('[ERROR] 숫자를 입력하세요.');
    }
  }

  async enterNumberOfTimes(carList) {
    Console.print('시도할 횟수는 몇 회인가요?');
    const numberOfTimes = await Console.readLineAsync('');
    this.raceStart(numberOfTimes, carList);
    const result = new Result();
    result.FinalResult(carList);
  }
}

export default Play;
