class Referee {
  #results;

  recordNumberOfRound(number) {
    this.#results = Array.from({ length: number }, () => new Map());
  }

  recordResult(name, moveCount, round) {
    this.#results[round].set(name, moveCount);
  }

  get results() {
    return this.#results.slice();
  }

  findWinners() {
    const winners = [];
    this.#finalResult.forEach((moveCount, name) => {
      if (this.#maxMoveCount === moveCount) winners.push(name);
    });
    return winners;
  }

  get #finalResult() {
    return this.#results[this.#results.length - 1];
  }

  get #maxMoveCount() {
    return Math.max(...this.#finalResult.values());
  }
}

export default Referee;
