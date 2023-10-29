class Cars {
  #names;
  #attemptCount;

  constructor() {
    this.#names = [];
    this.#attemptCount = 0;
  }

  get names() {
    return this.#names;
  }

  set names(answer) {
    this.#names = answer;
  }

  get attemptCount() {
    return this.#attemptCount;
  }

  set attemptCount(count) {
    this.#attemptCount = count;
  }
}

module.exports = Cars;
