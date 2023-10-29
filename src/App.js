/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
import { Random, Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    const carInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n ',
    );
    const numInput = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n',
    );
    const carArr = carInput.split(',');
    const car = {};
    carArr.forEach((element) => {
      car[element] = '';
    });

    function goStop(value) {
      for (const [key, val] of Object.entries(car)) {
        if (value >= 4) {
          car[key] += '-';
        }
      }
    }
    function carValue() {
      for (let index = 0; index < numInput; index++) {
        const value = Random.pickNumberInRange(0, 9);
        // Console.print(value);
        goStop(value);
      }
    }

    carValue();
  }
}

export default App;
