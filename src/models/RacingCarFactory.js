import RacingCar from './RacingCar.js';

class RacingCarFactory {
  createRacingCar(name) {
    return new RacingCar(name);
  }
}

export default RacingCarFactory;
