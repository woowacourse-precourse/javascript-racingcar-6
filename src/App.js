import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './Constants';
import Validation from './Validation';
import CarRacingGame from './CarRacingGame';
import Car from './Car';

class App {
  /** @constructor */
  constructor() {
    /** @type {CarRacingGame} */
    this.carRacingGame = new CarRacingGame();
  }

  async play() {
    await this.readCarNames();
  }

  // 사용자로부터 경주할 자동차 이름들을 입력받음
  async readCarNames() {
    const answer = await Console.readLineAsync(MESSAGE.INPUT_CAR_NAMES);
    const cars = answer.split(',');

    cars.forEach((car) => {
      Validation.validateCarName(car);
    });

    Validation.validateDuplicateName(cars);

    this.carRacingGame.setCars(cars.map((car) => new Car(car)));
    await this.readTryCount();
  }

  // 사용자로부터 전진 시도 횟수를 입력받음
  async readTryCount() {
    const answer = await Console.readLineAsync(MESSAGE.INPUT_TRY_COUNT);

    Validation.validateTryCount(answer);

    this.printRacingResult(answer);
  }

  /**
   * 레이싱을 진행하고 결과 출력
   * @param {number} count 전진 시도 횟수
   * @returns {void}
   */
  printRacingResult(count) {
    Console.print(`\n${MESSAGE.GAME_RESULT}`);
    this.carRacingGame.goForward(count, (results) => {
      results.forEach(({ name, distance }) => {
        Console.print(`${name} : ${'-'.repeat(distance)}`);
      });
      Console.print(' ');
    });

    Console.print(
      `${MESSAGE.FINAL_WINNER} : ${this.carRacingGame.getWinner().join(', ')}`,
    );
  }
}

export default App;
