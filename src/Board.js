import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';

const POSITIVE_INTEGER_REGEX = /^\d+$/;

class Board {

  /** @type {Array<Car>} */
  #cars = [];

  /** @type {Number} */
  #numTurns = null;

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

  /**
   * 사용자로부터 이동을 시도할 횟수를 입력받아 멤버로 저장한다.
   */
  async setNumTurns() {
    const input = await Console.readLineAsync();
    this.#validateNumTurns(input);
    this.#numTurns = parseInt(input);
  }

  /**
   * 양의 정수로 구성되어 있는지 유효성검사를 수행한다.
   * @param {String} input 
   */
  #validateNumTurns(input) {
    if (!POSITIVE_INTEGER_REGEX.test(input)) {
      // TODO: Error 메시지 변경
      throw new Error("[ERROR]");
    }
  }

  getNumTurns() {

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
