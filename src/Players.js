import CheckError from './CheckError.js';

class Players {
  #names;
  #gameResult;

  constructor(names) {
    this.#names = names.split(',').map((name) => {
      const trimmed = name.trim();
      CheckError.isLessThanMaxNameLength(trimmed);
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