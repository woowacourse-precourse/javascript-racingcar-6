class Referee {
  #totalResults;

  recordNumberOfRound(number) {
    this.#totalResults = Array.from({ length: number }, () => new Map());
  }

  recordResult(name, moveCount, round) {
    // 인덱스가 0부터 시작하기 때문에 0라운드가 첫 번째 라운드
    this.#totalResults[round].set(name, moveCount);
  }

  getTotalResults() {
    return this.#totalResults.slice();
  }

  findWinners() {
    const winners = [];
    this.#getFinalResultMap().forEach((moveCount, name) => {
      if (this.#getMaxMoveCount() === moveCount) winners.push(name);
    });
    return winners;
  }

  #getFinalResultMap() {
    return this.#totalResults[this.#totalResults.length - 1];
  }

  #getMaxMoveCount() {
    return Math.max(...this.#getFinalResultMap().values());
  }
}

export default Referee;
