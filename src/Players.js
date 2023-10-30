class Players {
  #names;
  #gameResult;

  constructor(names) {
    this.#names = names;
    this.#gameResult = [...this.#names].fill(0);
  }

  race() {

  }

  printResult() {

  }
}

export default Players;