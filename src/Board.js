import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js'

class Board {

  /** @type {Array<Car>} */
  #cars = [];

  /**
   * 사용자로부터 입력받은 이름의 레이싱카 객체를 생성한다.
   */
  async setCars() {
    const carNames = await this.#inputCarNames();
    carNames.forEach((name) => {
      this.#cars.push(new Car(name));
    });
  }

  /**
   * 사용자로부터 레이싱카들의 이름을 입력받아 배열로 반환한다.
   * @returns {Array<String>} carNames
   */
  async #inputCarNames() {
    return await Console.readLineAsync().split(',');
  }

  setNumTurns() {

  }

  getNumTurns() {

    return 2;
  }

  executeTurn() {

  }

  printMiddleResult() {

  }

  pickOutWinner() {

  }

  printFinalResult() {

  }
}

export default Board;
