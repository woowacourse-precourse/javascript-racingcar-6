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

    function goStop() {
      for (const key of Object.keys(car)) {
        const value = Random.pickNumberInRange(0, 9);
        if (value >= 4) {
          car[key] += '-';
        }
      }
    }

    function carPrint() {
      for (const [key, value] of Object.entries(car)) {
        Console.print(`${key} : ${value}`);
      }
      Console.print('');
    }
    function carValue() {
      for (let index = 0; index < numInput; index++) {
        goStop();
        carPrint();
      }
    }

    carValue();
  }
}

export default App;
