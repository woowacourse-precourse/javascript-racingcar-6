import { Random } from '@woowacourse/mission-utils';

class MoveCar {
  constructor(forward) {
    this.forward = forward;
  }

  moveCar = (car) => {
    if (!this.forward.has(car)) {
      this.forward.set(car, '-');
      return;
    }

    this.forward.set(car, this.forward.get(car) + '-');
  };

  stopCar = (car) => {
    if (this.forward.get(car) === undefined) {
      this.forward.set(car, '');
    }
  };

  race = (car) => {
    const randomNumber = Random.pickNumberInRange(0, 9);

    if (randomNumber < 4) this.stopCar(car);
    if (randomNumber >= 4) this.moveCar(car);
  };
}

export default MoveCar;
