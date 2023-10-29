import { calculateLongestDistance } from './../utils/calculateLongestDistance.js';

class RaceManager {
  /**
   * @constructor
   * @param {string[]} carModels - 차량 모델의 배열
   */
  constructor(carModels) {
    this.carModels = carModels;
    this.moveCount = 0;
  }

  race() {
    this.carModels.forEach(carModel => carModel.move());
  }

  /**
   * 이동 횟수를 지정된 값으로 설정
   * @param {number} moveCount - 설정할 새로운 이동 횟수
   */
  setMoveCount(moveCount) {
    this.moveCount = moveCount;
  }

  calcultateWinner() {
    const maxPosition = calculateLongestDistance(this.carModels);

    const winners = this.carModels.filter(
      carModel => carModel.position.length === maxPosition,
    );
    return winners.map(winner => winner.carName).join(', ');
  }
}

export default RaceManager;
