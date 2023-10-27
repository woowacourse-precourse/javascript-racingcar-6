import { Console } from '@woowacourse/mission-utils';
import { validate, inputCarRegex } from './validate.js';

class App {
  async play() {
    Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const carInput = (await Console.readLineAsync('')).trim();
    if (!validate(carInput, inputCarRegex)) {
      throw new Error('[ERROR] 입력이 잘못된 형식입니다.');
    }
    const cars = input.split(',');
  }
}

export default App;
