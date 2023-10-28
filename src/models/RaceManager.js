import { calculateLongestDistance } from './../utils/calculateLongestDistance';

class RaceManager {
  constructor(carModels) {
    this.carModels = carModels;
    this.moveCount = 0;
  }

  race() {
    this.carModels.forEach(carModel => carModel.move());
  }

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
