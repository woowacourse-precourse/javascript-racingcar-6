const outputView = require("../../View/outputView");
import { ERROR } from "../../Utils/Message";

class Attempt {
  #input;

  constructor(input) {
    this.#input = input;
  }

  validate() {
    if (this.check) {
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
    if (String(this.#input).length !== Math.floor(this.#input).length) {
      check = true;
    }
    return check;
  }
}

module.exprots = Attempt;
