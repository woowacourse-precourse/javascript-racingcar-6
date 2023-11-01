const outputView = require("../../View/outputView");
import { ERROR } from "../../Utils/Message";

class Attempt {
  #input;

  constructor(input) {
    this.#input = input;
  }

  validate() {
    if (this.check()) {
      outputView.printError(ERROR.ATTEMPT);
      return false;
    }
    return true;
  }

  check() {
    return this.isNaturalNum();
  }

  // 정수 확인
  isNaturalNum() {
    let check = false;
    // if (String(this.#input).length !== Math.floor(this.#input).length) {
    //   check = true;
    // }
    if (typeof this.#input === 'number' && Number.isInteger(this.#input) && this.#input >= 0) {
      // 숫자이면서 정수이고, 0 이상인 경우에만 true를 반환하도록 수정
      check = true;
    }
    return check;
  }
}

module.exports = Attempt;
