import { MissionUtils } from '@woowacourse/mission-utils';

class CarModel {
  #carList;

  constructor(cars) {
    this.#carList = cars.map((car) => ({ name: car, move: '' }));
  }

  updateRaceResults() {
    this.#carList = this.#carList.map((car) => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      const updatedMove = car.move + (randomNumber >= 4 ? '-' : '');
      return { ...car, move: updatedMove };
    });
    return this.#carList;
  }

  getWinners() {
    const winners = [];
    let maxResultLength = 0;

    this.#carList.forEach((car) => {
      const resultLength = car.move.length;
      if (resultLength > maxResultLength) {
        maxResultLength = resultLength;
        winners.length = 0;
        winners.push(car.name);
      } else if (resultLength === maxResultLength) {
        winners.push(car.name);
      }
    });

    return winners;
  }
}

export default CarModel;
