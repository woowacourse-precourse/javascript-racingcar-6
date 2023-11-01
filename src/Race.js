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
}
export default Race;
