import { Console } from '@woowacourse/mission-utils';
import Strings from './resources/Strings.js'
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
    Console.print(Strings.INPUT_CAR_NAMES);
    await this.#board.setCars()
    Console.print(Strings.INPUT_NUM_TURNS);
    this.#board.setNumTurns()
  }

  #playGame() {
    const numTurns = this.#board.getNumTurns()
    Console.print(Strings.GAME_RESULT);
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
