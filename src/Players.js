import { MAX_NAME_LENGTH, ERROR } from './Constant.js';

class Players {
  #names;
  #gameResult;

  constructor(names) {
    this.#names = names.split(',').map((name) => {
      const trimmed = name.trim();
      if (trimmed > MAX_NAME_LENGTH) throw new Error(ERROR.MORE_THAN_MAX);
      return trimmed;
    });
    this.#gameResult = [...this.#names].fill(0);
  }

  race() {

  }

  printResult() {

  }
}

export default Players;