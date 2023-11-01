import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import CarList from './CarList.js';
import { INPUT_MESSAGE, OUTPUT_MESSAGE } from '../constant/message.js';

class Game {
  #carListArr = [];
  #moveNum = '';

  #carList = new CarList();

  getCarGameInfo() {
    return { myCars: this.#carListArr };
  }

  getCarMoveNum() {
    return { moveNum: this.#moveNum };
  }

  getCarList() {
    return { carList: this.#carList };
  }

  /**
   * 초기 자동차 이름을 입력 받기위한 함수
   */
  async init() {
    const carListInput = await Console.readLineAsync(
      INPUT_MESSAGE.INPUT_CAR_NAME,
    );
    this.#carListArr = carListInput.split(',');
  }

  async createCars() {
    this.#carListArr.forEach((carName) => {
      this.#carList.add(new Car(carName));
    });
  }

  async moveQuestion() {
    this.#moveNum = await Console.readLineAsync(
      INPUT_MESSAGE.INPUT_MOVE_NUMBER,
    );
  }

  /**
   * 시도 횟수에 따른 게임 진행
   */
  async process() {
    Console.print(OUTPUT_MESSAGE.OUTPUT_RESULT);
    for (let i = 0; i < this.#moveNum; i++) {
      this.#carList.race();
      this.#carList.printCarCurrnetState();
      Console.print('');
    }
  }

  async printWinner() {
    const winner = await this.#carList.setWinner();
    Console.print(`${OUTPUT_MESSAGE.OUTPUT_WINNER}${winner}`);
  }
}

export default Game;
