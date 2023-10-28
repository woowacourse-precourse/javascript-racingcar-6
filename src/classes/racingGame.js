import Car from './car';

class RacingGame {
  #racingCars = [];

  constructor(carsNameInput) {
    carsNameInput.split(',').forEach((carName) => {
      this.#racingCars.push(new Car(carName.trim()));
    });
  }
}

export default RacingGame;
