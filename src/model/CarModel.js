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
}

export default CarModel;
