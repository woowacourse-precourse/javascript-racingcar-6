// models/CarRaceModel.js
import { Random } from '@woowacourse/mission-utils';
import { calculateLongestDistance } from '../utils/calculateLongestDistance.js';
class CarRaceModel {
  constructor() {
    this.carList = [];
    this.moveCount = 0;
    this.gameProgress = {};
    this.gameWinner = '';
  }

  setCarList(carList) {
    this.carList = carList;
  }

  setMoveCount(moveCount) {
    this.moveCount = moveCount;
  }

  initGameProgress(carName) {
    this.gameProgress[carName] = '';
  }

  calculateCarMove() {
    for (const car of this.carList) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (randomNumber >= 4) {
        this.gameProgress[car] += '-';
      }
    }
  }

  calculateWinner() {
    const valuesArray = Object.values(this.gameProgress).map(
      value => value.length,
    );
    const longestDistance = calculateLongestDistance(valuesArray);
    const winnerList = [];

    for (const key in this.gameProgress) {
      const gameDistance = this.gameProgress[key].length;
      if (gameDistance === longestDistance) {
        winnerList.push(key);
      }
    }

    this.gameWinner = winnerList.join(', ');
  }
}

export default CarRaceModel;
