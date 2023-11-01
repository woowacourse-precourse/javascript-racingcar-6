import { GAME_ERROR } from "./Constant.js";

class Attempt {
  constructor(input) {
    this.userTryInput = input;
  }

  validate() {
    if (!this.check()) throw new Error(GAME_ERROR.ERROR_NUMBER);
    return true;
  }

  check() {
    return (
      !isNaN(this.userTryInput) &&
      this.userTryInput > 0 &&
      Number.isInteger(this.userTryInput)
    );
  }
}

export default Attempt;
