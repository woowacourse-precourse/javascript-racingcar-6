import { Console } from '@woowacourse/mission-utils';
import { validate, inputCarRegex, inputNumber } from './validate.js';

class App {
  async play() {
    Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const carInput = (await Console.readLineAsync('')).trim();
    if (!validate(carInput, inputCarRegex)) {
      throw new Error('[ERROR] 입력이 잘못된 형식입니다.');
    }
    const cars = carInput.split(',');

    Console.print('시도할 횟수는 몇 회인가요?');
    const retryInput = (await Console.readLineAsync('')).trim();
    if (!validate(retryInput, inputNumber)) {
      throw new Error('[ERROR] 입력이 잘못된 형식입니다.');
    }
    const retry = Number(retryInput);
  }
}

export default App;
