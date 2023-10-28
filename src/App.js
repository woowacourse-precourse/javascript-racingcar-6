import { Console } from '@woowacourse/mission-utils';
import InputValidator from './InputValidator.js';
import Car from './Model/Car.js';
import Output from './View/Output.js';

class App {
  /**
   *
   * @param {Car[]} cars
   */
  constructor(cars, tryNum) {
    this.cars = cars;
    this.tryNum = tryNum;
  }

  async play() {
    const carNames = await this.#inputCarNames();
    this.cars = carNames.map((carName) => new Car(carName));

    this.tryNum = await this.#inputTryNum();

    this.#playRacing();

    const winners = this.#winnerGenerator().map((winner) => winner.name);

    Output.printWinners(winners);
  }

  async #inputCarNames() {
    const carNamesInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const validatedCarNames = InputValidator.carNameValidator(carNamesInput);
    return validatedCarNames;
  }

  async #inputTryNum() {
    const tryNumInput = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );
    const validatedTryNum = InputValidator.tryNumValidator(tryNumInput);
    return validatedTryNum;
  }

  #playRacing() {
    Console.print('\n실행 결과');

    while (this.tryNum > 0) {
      this.cars.forEach((car) => {
        car.addDistance();
        Output.printCarState(car.name, car.distance);
      });

      Console.print('');

      this.tryNum -= 1;
    }
  }

  #winnerGenerator() {
    const maxDistance = Math.max(...this.cars.map((car) => car.distance));
    const winners = this.cars.filter((car) => car.distance === maxDistance);

    return winners;
  }
}

export default App;
