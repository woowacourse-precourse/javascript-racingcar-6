import Console from '../Console.js';
import RacingCar from './RacingCar.js';

class Race {
  cars = [];

  async prepare() {
    const carNames = await Console.askCarNames();
    carNames.forEach((name) => {
      this.cars.push(new RacingCar(name));
    });
    console.log(this.cars);
  }
}

export default Race;
