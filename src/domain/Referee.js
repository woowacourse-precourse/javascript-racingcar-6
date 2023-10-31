import View from '../View.js';

class Referee {
  #results;

  recordNumberOfRound(number) {
    this.#results = Array.from({ length: number }, () => new Map());
  }

  recordResult(name, moveCount, round) {
    this.#results[round].set(name, moveCount);
  }

  showResults() {
    View.printResults(this.#results);
  }

  findWinners() {}
}

export default Referee;
