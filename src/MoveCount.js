class MoveCount {
  #move;

  constructor(move) {
    this.#move = move;
  }

  getMove() {
    return this.#move;
  }
}

export default MoveCount;
