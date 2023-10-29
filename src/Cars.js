class Cars {
  #names;

  constructor() {
    this.#names = [];
  }

  get names() {
    return this.#names;
  }

  set names(answer) {
    this.#names = answer;
  }
}

module.exports = Cars;
