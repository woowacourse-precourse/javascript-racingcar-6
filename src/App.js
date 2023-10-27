import { Console } from '@woowacourse/mission-utils';
import InputValidator from './InputValidator.js';
class App {
  async play() {
    const carNames = await this.#inputCarNames();
    console.log(carNames);
    const tryNum = await this.#inputTryNum();
    console.log(tryNum);
  }

  async #inputCarNames() {
    const carNamesInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );
    InputValidator.carNameValidator(carNamesInput);
    return carNamesInput;
  }
  async #inputTryNum() {
    const tryNumInput = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?'
    );
    InputValidator.tryNumValidator(tryNumInput);
    return tryNumInput;
  }
}

export default App;
