import { Console, Random } from "@woowacourse/mission-utils";
import Validate from "./Validate";
import MESSEGE from "./Message";

/** 경기를 관리하는 클래스 */
class Race {
  /** @type {string[]} */
  #cars = [];
  /** @type {number[]} */
  #forwards = [];
  #times = 0;

  /** 사용자의 입력을 받는 준비 구간 */
  async ready() {
    this.#cars = await this.getCarNamesInput(MESSEGE.ENTER);
    this.#times = await this.getNumberInput(MESSEGE.ASK_TIMES);
  }

  /** 사용자 입력을 받은 이후 경기를 시작하는 메서드 */
  start() {
    /** @type {number} */
    let i;
    this.#forwards = new Array(this.#cars.length).fill(0);
    for (i = 0; i < this.#times; i++) {
      this.printRaces();
    }
  }

  /** @param {string} message  */
  async getCarNamesInput(message) {
    const input = await Console.readLineAsync(message);
    return Validate.carNames(input);
  }

  /** @param {string} message  */
  async getNumberInput(message) {
    const input = await Console.readLineAsync(message);
    return Validate.isNumber(input);
  }

  /** 경기 진행 상황을 출력하는 메서드 */
  printRaces() {
    this.#cars.forEach((car, idx) => {
      const randInt = Random.pickNumberInRange(0, 9);
      if (Validate.isForward(randInt)) {
        this.#forwards[idx] = this.#forwards[idx] + 1;
      }
      Console.print(`${car} : ${"-".repeat(this.#forwards[idx])}`);
    });
    Console.print("");
  }
}
export default Race;
