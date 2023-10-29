class Game {
  #gameCount = 0;
  #gameStatus = new Map();

  addGameStatus(result) {
    this.#gameStatus.set(this.#gameCount, result);
    this.#gameCount += 1;
  }

  getGameCount() {
    return this.#gameCount;
  }

  getGameStatus(idx) {
    return this.#gameStatus.get(idx);
  }

  getGameStatuses() {
    return Array.from(this.#gameStatus.values());
  }
}

export default Game;
