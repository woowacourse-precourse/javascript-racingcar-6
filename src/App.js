import {Console} from '@woowacourse/mission-utils';
import {validateCarNamesString} from './validation.js';

class App {
  async play() {
    const input = Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    validateCarNamesString(input)
  }
}

export default App;
