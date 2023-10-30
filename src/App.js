import { Console, Random } from '@woowacourse/mission-utils';
import Car from './Car.js';

class App {
  constructor() {
    this.CARS_ARRAY = [];
    this.CARS_NAME_ARRAY = [];
    this.GAME_COUNT = 0;
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
      Console.print('올바르다');
    }
  }

  // #checkArrayOfCars() {
  //   if (new Set(this.TEMP_CARS).size !== this.TEMP_CARS.length) {
  //     throw new Error('[ERROR]');
  //   }

  //   this.TEMP_CARS.forEach((element) => {
  //     if (element.includes(' ') || element.length === 0 || element.length > 5) {
  //       throw new Error('[ERROR]');
  //     }
  //   });

  //   return true;
  // }

  // #checkGameCountInput() {
  //   if (Number.isNaN(this.GAME_COUNT)) {
  //     throw new Error('[ERROR]');
  //   }

  //   return true;
  // }

  // #makeArrayOfCars() {
  //   this.TEMP_CARS.forEach((carName) => {
  //     this.CARS_ARRAY.push(new Car(carName, 0));
  //   });
  // }

  // async #getInputGameCount() {
  //   this.GAME_COUNT =
  //     await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

  //   try {
  //     this.#checkGameCountInput();
  //   } catch (e) {
  //     Console.print(e);
  //   }
  // }

  // async #gameStart() {
  //   this.CARS_ARRAY.forEach((car, index) => {
  //     const RANDOM_NUMBER = Random.pickNumberInRange(0, 9);
  //     this.#moveForward(index, RANDOM_NUMBER);
  //     // this.#printEachGameResult(index);
  //   });
  // }

  // #moveForward(carIndex, randomNumber) {
  //   if (randomNumber > 4) {
  //     this.CARS_ARRAY[carIndex].forwardCount += 1;
  //   }
  //   let resultBar = '';
  //   for (let i = 0; i < this.CARS_ARRAY[carIndex].forwardCount; i += 1) {
  //     resultBar += '-';
  //   }

  //   Console.print(`${this.CARS_ARRAY[carIndex].carName} : ${resultBar}`);
  // }

  // #printEachGameResult(carIndex) {
  //   let resultBar = '';

  //   for (let i = 0; i < this.CARS_ARRAY[carIndex].forwardCount; i += 1) {
  //     resultBar += '-';
  //   }

  //   Console.print(`${this.CARS_ARRAY[carIndex].carName} : ${resultBar}`);
  // }

  // #pickWinnerCar() {
  //   let winner = 0;

  //   this.CARS_ARRAY.forEach((car) => {
  //     winner = Math.max(winner, car.forwardCount);
  //   });

  //   const WINNER_CAR_ARRAY = this.CARS_ARRAY.filter(
  //     (car) => car.forwardCount === winner,
  //   );

  //   let result = '최종 우승자 : ';

  //   if (WINNER_CAR_ARRAY.length > 1) {
  //     WINNER_CAR_ARRAY.forEach((winnerCar, index) => {
  //       if (index < WINNER_CAR_ARRAY.length - 1) {
  //         result += `${winnerCar.carName}, `;
  //       } else {
  //         result += winnerCar.carName;
  //       }
  //     });
  //   } else {
  //     result += WINNER_CAR_ARRAY[0].carName;
  //   }
  //   return result;
  // }

  async play() {
    this.#getInputCars();
    //   try {
    //     await this.#getInputCars();
    //   } catch(e) {
    //     Console.print(e);
    //   }

    //   await this.#getInputGameCount();

    //   for (let i = 0; i <= this.GAME_COUNT; i += 1) {
    //     this.#gameStart();
    //   }
    // }
  }
}

export default App;
