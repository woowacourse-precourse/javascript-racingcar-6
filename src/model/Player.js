export default class Player {
  #moveCount = 0;

  constructor(name) {
    this.name = name;
  }

  increaseMoveCount() {
    this.#moveCount += 1;
  }

  getMoveCount() {
    return this.#moveCount;
  }
}
