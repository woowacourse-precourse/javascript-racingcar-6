import { Console } from '@woowacourse/mission-utils';
import Strings from './resources/Strings.js'
import Board from "./Board.js";

class GameManager {

  /** @type {Board} */
  #board = null;

  /**
   * 프로그램을 실행한다.
   */
  async play() {
    await this.#startGame();
    this.#playGame();
    this.#finishGame();
  }

  /**
   * 사용자로부터 자동차 이름과 시도 횟수를 입력받는다.
   */
  async #startGame() {
    this.#board = new Board();
    Console.print(Strings.INPUT_CAR_NAMES);
    await this.#board.setCars()
    Console.print(Strings.INPUT_NUM_TURNS);
    this.#board.setNumTurns()
    Console.print(Strings.NULL);
  }

  /**
   * 시도 횟수만큼 자동차 이동을 반복 시행하고, 매 회 진행상황을 출력한다.
   */
  #playGame() {
    const numTurns = this.#board.getNumTurns()
    Console.print(Strings.GAME_RESULT);
    for (let i = 0; i < numTurns; i++) {
      this.#board.executeTurn();
      this.#board.printMiddleResult();
    }
  }

  /**
   * 최종 결과를 출력한다.
   */
  #finishGame() {
    this.#board.pickOutWinner();
    this.#board.printFinalResult();
  }
}

export default GameManager; 
