import RacingCar from './RacingCar';

class CarRace {
  constructor(racingCarsInput, attemptsInput) {
    this.racingCars = this.#initRacingCars(racingCarsInput);
    this.attempts = Number(attemptsInput);
  }

  #initRacingCars(racingCarsInput) {
    return racingCarsInput
      .split(',')
      .map((racingCar) => new RacingCar(racingCar));
  }
}

export default CarRace;
