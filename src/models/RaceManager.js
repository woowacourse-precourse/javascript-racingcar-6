class RaceManager {
  #gameWinner;

  #moveCount;

  /**
   * @constructor
   * @param {string[]} carModels - 차량 모델의 배열
   */
  constructor(carModels) {
    this.carModels = carModels;
    this.#moveCount = 0;
    this.#gameWinner = '';
  }

  race() {
    this.carModels.forEach(carModel => carModel.move());
  }

  /**
   * 이동 횟수를 지정된 값으로 설정
   * @param {number} moveCount - 설정할 새로운 이동 횟수
   */
  setMoveCount(moveCount) {
    this.#moveCount = moveCount;
  }

  calculateLongestDistance() {
    const maxPosition = Math.max(
      ...this.carModels.map(car => car.getPosition()),
    );
    return maxPosition;
  }

  calcultateWinner() {
    const maxPosition = this.calculateLongestDistance();
    const winners = this.carModels.filter(
      carModel => carModel.getPosition() === maxPosition,
    );

    this.#gameWinner = winners.map(winner => winner.carName).join(', ');
  }

  getMoveCount() {
    return this.#moveCount;
  }

  getGameWinner() {
    return this.#gameWinner;
  }
}

export default RaceManager;
