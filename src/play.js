import { Console, Random } from '@woowacourse/mission-utils';
import Result from './result.js';
class Play {
  constructor() {}
  전진기능(carList) {
    for (let i = 0; i < carList.length; i++) {
      const number = Random.pickNumberInRange(0, 9);
      if (number >= 4) {
        carList[i].go();
      }
      Console.print(`${carList[i].name} : ${'-'.repeat(carList[i].position)}`);
    }
    console.log('\r');
  }

  시도하기기능(시도횟수, carList) {
    Console.print('\n실행결과');
    if (!isNaN(시도횟수)) {
      for (let i = 1; i <= 시도횟수; i++) {
        this.전진기능(carList);
      }
    }
    if (isNaN(시도횟수)) {
      throw new Error('[ERROR] 숫자입력하셈');
    }
  }

  async 횟수입력(carList) {
    Console.print('시도할 횟수는 몇 회인가요?');
    const 시도횟수 = await Console.readLineAsync('');
    this.시도하기기능(시도횟수, carList);
    const result = new Result();
    result.최종결과(carList);
  }
}

export default Play;
