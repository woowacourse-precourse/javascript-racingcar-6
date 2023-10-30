class GameManager {

  /** @type Board */
  #board = null;

  play() {
    this.#startGame();
    this.#playGame();
    this.#startGame();
  }

  #startGame() {
    // TEST:
    console.log("GameManager > startGame")
  }

  #playGame() {
    // TEST:
    console.log("GameManager > playGame")
  }

  #finishGame() {
    // TEST:
    console.log("GameManager > finishGame")
  }
}

export default GameManager; 
