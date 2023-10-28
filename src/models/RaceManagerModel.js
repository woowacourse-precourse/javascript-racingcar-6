import { calculateLongestDistance } from '../utils/calculateLongestDistance.js';

class RaceManagerModel {
  constructor(carModels) {
    this.carModels = carModels;
    this.moveCount = 0;
  }

  setMoveCount(moveCount) {
    this.moveCount = moveCount;
  }

  race() {
    this.carModels.forEach(carModel => carModel.move());
  }
}

export default RaceManagerModel;
