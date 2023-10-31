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
      '경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n',
    );

    this.CARS_NAME_ARRAY = CAR_INPUT.split(',');

    this.CARS_NAME_ARRAY.forEach((carName) => {
      if (!this.#checkCarName(carName)) {
        throw new Error('[ERROR] 자동차 이름이 올바르지 않습니다.');
      } else {
        this.CARS_ARRAY.push(new Car(carName, 0));
      }
    });
  }

  #checkCarName(carName) {
    return carName.length >= 1 && carName.length <= 5;
  }

  async #getInputGameCount() {
    const GAME_COUNT_INPUT =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

      try{
        this.#checkGameCountInput(GAME_COUNT_INPUT);
      } catch(e) {
        throw new Error(e);
      }
  }

  #checkGameCountInput(gameCount) {
    if(!Number.isNaN(parseInt(gameCount, 10))) {
      this.GAME_COUNT = gameCount;
    } else {
      throw new Error('[ERROR] 시도할 횟수는 숫자여야 합니다.');
    }
  }

  async #getInput() {
    await this.#getInputCars();
    await this.#getInputGameCount();
  }

  #playGame() {
    this.CARS_ARRAY.forEach((car, index) => {
      const RANDOM_NUMBER = Random.pickNumberInRange(0, 9);
      if (RANDOM_NUMBER >= 4) {
        this.#moveForwardCar(index);
      }
    });
    this.#printEachGameResult();
  }

  #moveForwardCar(carIndex) {
    this.CARS_ARRAY[carIndex].forwardCar();
  }

  #printEachGameResult() {
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
    try{
      await this.#getInput();
      Console.print('\n실행 결과');

      for(let i = 0; i < this.GAME_COUNT; i+= 1) {
        this.#playGame();
      }

      this.#pickWinnerOfGame();
    } catch(e) {
      throw new Error(e);      
    }

  }
}

export default App;
