class Race {
  #round;
  #winners = new Array();

  constructor(round) {
    this.#round = round;
  }
  setWinner(winner) {
    this.#winners.push(winner);
  }
  getRound() {
    return this.#round;
  }
  getWinner() {
    return this.#winners;
  }
}
export default Race;
