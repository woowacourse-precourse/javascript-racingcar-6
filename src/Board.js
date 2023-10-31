import { Console, Random } from '@woowacourse/mission-utils';
import Strings from './resources/Strings.js'
import Car from './Car.js';

const MOVE_MIN_DIGIT = 4;
const MAX_NAME_LENGTH = 5;
const POSITIVE_INTEGER_REGEX = /^\d+$/;

class Board {

  /** @type {Array<Car>} */
  #cars = [];

  /** @type {Array<Car>} */
  #winners = [];

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
      throw new Error(Strings.ERROR_NAME_LENGTH);
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
      throw new Error(Strings.ERROR_NON_POSITIVE_INTEGER);
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
    this.#cars.forEach((car) => {
      const middleResult = [car.getName(), Strings.COLON, Strings.DISTANCE.repeat(car.getDistance())].join(' ');
      Console.print(middleResult);
    })
    Console.print(Strings.NULL);
  }

  /**
   * 레이싱카들의 이동거리를 기준으로 우승자들을 winners에 저장한다.
   */
  pickOutWinner() {
    this.#winners = this.#cars.reduce((candidates, car) => {
      if (!candidates.length || car.getDistance() > candidates[0].getDistance()) {
        return [car];
      }
      if (car.getDistance() === candidates[0].getDistance()) {
        candidates.push(car);
      }
      return candidates;
    }, []);
  }


  /**
   * 최종 우승한 레이싱카의 이름을 출력한다.
   */
  printFinalResult() {
    // TODO: 최종 결과 출력 포맷 작성
    const winnerNames = this.#getWinnerNames();
    const finalResult = '최종 우승자 : ' + winnerNames.join(', ');
    console.log(finalResult);
  }

  /**
   * 최종 우승한 레이싱카의 이름을 배열로 반환한다.
   * @returns {Array<String>} winnerNames
   */
  #getWinnerNames() {
    let winnerNames = []
    this.#winners.forEach((car) => {
      winnerNames.push(car.getName());
    });
    return winnerNames;
  }
}

export default Board;
