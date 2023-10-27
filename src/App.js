import { Console } from '@woowacourse/mission-utils';
import InputValidator from './InputValidator.js';
import Car from './Model/Car.js';
class App {
  /**
   *
   * @param {Car[]} cars
   */
  constructor(cars) {
    this.cars = cars;
  }

  async play() {
    const carNames = await this.#inputCarNames();
    this.cars = carNames.map((carName) => new Car(carName));

    const tryNum = await this.#inputTryNum();
  }

  async #inputCarNames() {
    const carNamesInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );
    const validatedCarNames = InputValidator.carNameValidator(carNamesInput);
    return validatedCarNames;
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
