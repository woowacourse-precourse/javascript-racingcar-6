import Board from "./Board.js";

class GameManager {

  /** @type {Board} */
  #board = null;

  async play() {
    await this.#startGame();
    this.#playGame();
    this.#finishGame();
  }

  async #startGame() {
    this.#board = new Board();
    // TODO: 안내메시지 출력 (Strings.INPUT_CAR_NAMES)
    await this.#board.setCars()
    // TODO: 안내메시지 출력 (Strings.INPUT_NUM_TURNS)
    this.#board.setNumTurns()
  }

  #playGame() {
    const numTurns = this.#board.getNumTurns()
    // TODO: 안내메시지 출력 (Strings.GAME_RESULT)
    for (let i = 0; i < numTurns; i++) {
      this.#board.executeTurn();
      this.#board.printMiddleResult();
    }
  }

  #finishGame() {
    this.#board.pickOutWinner();
    this.#board.printFinalResult();
  }
}

export default GameManager; 
