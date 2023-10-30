import { Console, Random } from '@woowacourse/mission-utils';
import Car from './Car.js';

class App {
  constructor() {
    this.CARS_ARRAY = [];
    this.CARS_NAME_ARRAY = [];
    this.GAME_COUNT = 0;
    this.WINNER_CAR_NAME = [];
  }

  async #getInputCars() {
    const CAR_INPUT = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    this.CARS_NAME_ARRAY = CAR_INPUT.split(',');

    try {
      this.CARS_NAME_ARRAY.forEach((car) => {
        this.#checkCarName(car);
      });
    } catch (e) {
      Console.print(e);
    }
  }

  #checkCarName(carName) {
    if (carName.includes(' ') || carName.length < 1 || carName.length > 5) {
      throw new Error('[ERROR] 자동차 이름이 올바르지 않습니다.');
    } else {
      this.CARS_ARRAY.push(new Car(carName, 0));
    }
  }

  async #getInputGameCount() {
    const GAME_COUNT_INPUT =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    try {
      this.#checkGameCountInput(GAME_COUNT_INPUT);
    } catch (e) {
      Console.print(e);
    }
  }

  #checkGameCountInput(gameCount) {
    if (Number.isNaN(gameCount)) {
      throw new Error('[ERROR]');
    } else {
      this.GAME_COUNT = gameCount;
    }

    return true;
  }

  async #getInput() {
    await this.#getInputCars();
    await this.#getInputGameCount();
  }

  async #playGame() {
    this.CARS_ARRAY.forEach((car, index) => {
      const RANDOM_NUMBER = Random.pickNumberInRange(0, 9);
      if (RANDOM_NUMBER >= 4) {
        this.#moveForwardCar(index);
      }
    });
    this.#printEachGameResult();
  }

  async #moveForwardCar(carIndex) {
    this.CARS_ARRAY[carIndex].forwardCar();
  }

  async #printEachGameResult() {
    this.CARS_ARRAY.forEach((car) => {
      Console.print(`${car.carName} : ${'-'.repeat(car.forwardCount)}`);
    });
    Console.print('');
  }

  #pickWinnerOfGame() {
    let maxForward = 0;

    this.CARS_ARRAY.forEach((car) => {
      maxForward = Math.max(car.forwardCount, maxForward);
    });

    this.CARS_ARRAY.forEach((car) => {
      if (car.forwardCount === maxForward) {
        this.WINNER_CAR_NAME.push(car.carName);
      }
    });

    this.#printWinner();
  }

  #printWinner() {
    if (this.WINNER_CAR_NAME.length > 1) {
      this.#makeWinnerArray();
    } else {
      Console.print(`최종 우승자 : ${this.WINNER_CAR_NAME[0]}`);
    }
  }

  #makeWinnerArray() {
    let carNames = '';

    for (let i = 0; i < this.WINNER_CAR_NAME.length; i += 1) {
      if (i !== this.WINNER_CAR_NAME.length - 1) {
        carNames += `${this.WINNER_CAR_NAME[i]}, `;
      } else {
        carNames += `${this.WINNER_CAR_NAME[i]}`;
      }
    }

    Console.print(`최종 우승자 : ${carNames}`);
  }

  async play() {
    await this.#getInput();

    Console.print("\n실행 결과");
    for (let i = 0; i < this.GAME_COUNT; i += 1) {
      this.#playGame();
    }

    this.#pickWinnerOfGame();
  }
}

export default App;
