class Referee {
  #totalResults;

  recordNumberOfRound(number) {
    this.#totalResults = Array.from({ length: number }, () => new Map());
  }

  recordResult(name, moveCount, round) {
    // 인덱스가 0부터 시작하기 때문에 0라운드가 첫 번째 라운드
    this.#totalResults[round].set(name, moveCount);
  }

  get totalResults() {
    return this.#totalResults.slice();
  }

  findWinners() {
    const winners = [];
    this.#finalResult.forEach((moveCount, name) => {
      if (this.#maxMoveCount === moveCount) winners.push(name);
    });
    return winners;
  }

  get #finalResult() {
    return this.#totalResults[this.#totalResults.length - 1];
  }

  get #maxMoveCount() {
    return Math.max(...this.#finalResult.values());
  }
}

export default Referee;
