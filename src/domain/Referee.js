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

  findWinners() {
    const finalResult = this.#results[this.#results.length - 1];
    const maxMoveCount = Math.max(...finalResult.values());
    const winners = [];
    finalResult.forEach((moveCount, name) => {
      if (maxMoveCount === moveCount) winners.push(name);
    });
    return winners;
  }
}

export default Referee;
