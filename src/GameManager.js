import Board from "./Board.js";

class GameManager {

  /** @type {Board} */
  #board = null;

  play() {
    this.#startGame();
    this.#playGame();
    this.#finishGame();
  }

  #startGame() {
    this.#board = new Board();
    // TODO: 안내메시지 출력 (Strings.INPUT_CAR_NAMES)
    this.#board.setCars()
    // TODO: 안내메시지 출력 (Strings.INPUT_NUM_TURNS)
    this.#board.setNumTurns()
  }

  #playGame() {
    const numTurns = this.#board.getNumTurns()
    // TODO: 안내메시지 출력 (Strings.GAME_RESULT)
    for (let i = 0; i < numTurns; i++) {

      // TEST:
      console.log(`for i=${i}`);

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
