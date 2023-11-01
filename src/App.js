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
    //* 자동차 이름들을 입력받습니다.
    const carNames = await this.inputCarNames();
    this.cars = carNames.map((carName) => new Car(carName));

    //* 시도할 횟수를 입력받습니다.
    this.tryNum = await this.inputTryNum();

    //* 경주를 실행하고 이에 대한 결과를 출력합니다.
    this.playRacing();

    //* 우승자를 생성합니다.
    const winners = this.winnerGenerator().map((winner) => winner.name);

    //* 우승자를 출력합니다.
    Output.printWinners(winners);
  }

  /**
   * 입력받은 자동차 이름의 string 배열 타입
   * @returns {[string]}
   */
  async inputCarNames() {
    const carNamesInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const validatedCarNames = CarNameValidator.carNameValidator(carNamesInput);

    return validatedCarNames;
  }

  /**
   * 시도 횟수의 number 타입
   * @returns {number}
   */
  async inputTryNum() {
    const tryNumInput = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );
    const validatedTryNum = tryNumValidator.tryNumValidator(tryNumInput);
    return validatedTryNum;
  }

  playRacing() {
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

  /**
   * 우승한 자동차의 Car 배열 타입
   * @returns {[Car]}
   */
  winnerGenerator() {
    const maxDistance = Math.max(...this.cars.map((car) => car.distance));
    const winners = this.cars.filter((car) => car.distance === maxDistance);

    return winners;
  }
}

export default App;
