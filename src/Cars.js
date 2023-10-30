class Cars {
  #names;
  #attemptCount;
  #forwardCounts;

  constructor() {
    this.#names = [];
    this.#moveCounts = [];
  }

  get names() {
    return this.#names;
  }

  set names(answer) {
    this.#names = answer;
  }

  get forwardCounts() {
    return this.#moveCounts;
  }

  set forwardCounts(index) {
    this.#moveCounts[index] += 1;
  }
}

module.exports = Cars;
