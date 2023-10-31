import { Console, Random } from '@woowacourse/mission-utils';
import Car from './Car.js';

const MOVE_MIN_DIGIT = 4;
const MAX_NAME_LENGTH = 5;
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
      this.#validateName(name);
      this.#cars.push(new Car(name));
    });
  }

  /**
   * 사용자로부터 레이싱카들의 이름을 입력받아 배열로 반환한다.
   * @returns {Array<String>} carNames
   */
  async #inputCarNames() {
    // TEST:
    return '마세라티,제네시스,아이오닉'.split(',');
    // return await Console.readLineAsync().split(',');
  }

  /**
   * name의 길이가 5 이하인지 유효성검사를 수행한다.
   * @param {String} name 
   */
  #validateName(name) {
    if (name.length > MAX_NAME_LENGTH) {
      // TODO: Error 메시지 변경
      throw new Error("[ERROR]");
    }
  }

  /**
   * 사용자로부터 이동을 시도할 횟수를 입력받아 멤버로 저장한다.
   */
  async setNumTurns() {
    // TEST:
    const input = '5';
    // const input = await Console.readLineAsync();

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

  /**
   * 사용자로부터 입력받은 총 턴 수를 반환한다.
   * @returns {Number} numTurns
   */
  getNumTurns() {
    return this.#numTurns;
  }

  /**
   * cars의 모든 Car에 대하여, 한 자리 난수를 발생시켜 MOVE_MIN_DIGIT 이상일 경우 1만큼 이동시킨다.
   */
  executeTurn() {
    // TEST:
    this.#cars.forEach((car) => {
      const randomDigit = this.#getRandomDigit();
      if (randomDigit >= MOVE_MIN_DIGIT) {
        car.move();
      }
    })
    // this.#cars.forEach((car) => {
    //   if (this.#getRandomDigit() >= MOVE_MIN_DIGIT) {
    //     car.move();
    //   }
    // });
  }

  /**
   * 랜덤한 한 자리 수를 반환한다.
   * @returns {Number} randomDigit
   */
  #getRandomDigit() {
    return Random.pickNumberInRange(0, 9);
  }

  /**
   * 레이싱카들의 현재 이동 거리를 출력한다.
   */
  printMiddleResult() {
    // TODO: 중간 출력 포맷 작성
    this.#cars.forEach((car) => {
      const middleResult = [car.getName(), ':', '-'.repeat(car.getDistance())].join(' ');
      console.log(middleResult);
    })
    console.log();
  }

  pickOutWinner() {

  }

  printFinalResult() {

  }
}

export default Board;
