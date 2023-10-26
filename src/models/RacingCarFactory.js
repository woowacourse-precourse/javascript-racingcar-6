import RacingCar from './RacingCar';

class RacingCarFactory {
  createCar(name) {
    return new RacingCar(name);
  }
}

export default RacingCarFactory;
