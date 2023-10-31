import { FORWARD } from '../utils/constants';
import getRandomNumber from '../utils/getRandomNumber';
import Car from './Car';

class CarRace {
  constructor(names) {
    this.cars = names.map(name => new Car(name));
  }

  getRaceRound() {
    this.cars.forEach(car => {
      if (getRandomNumber() >= FORWARD.CONDITION) {
        car.forward();
      }
    });
    return this.cars;
  }
}

export default CarRace;
