import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './Constants.js';
import Validation from './Validation.js';
import CarRacingGame from './CarRacingGame.js';
import Car from './Car.js';

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

    cars.forEach(car => {
      Validation.validateCarName(car)
    });

    Validation.validateDuplicateName(cars);

    this.carRacingGame.setCars(cars.map(car => new Car(car)));
    await this.readTryCount();
  }

  // 사용자로부터 전진 시도 횟수를 입력받음
  async readTryCount() {
    const answer = await Console.readLineAsync(MESSAGE.INPUT_TRY_COUNT);
    
    Validation.validateTryCount(answer);
  }
}

export default App;
