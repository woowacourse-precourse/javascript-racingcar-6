class RacingCars {
  #CARS_STATUS = {};

  constructor(carsList) {
    carsList.forEach((car) => {
      this.#CARS_STATUS[car] = 0;
    });
  }

  getStatus = () => {
    return this.#CARS_STATUS;
  };

  increaseCarPosition = (car) => {
    this.#CARS_STATUS[car]++;
  };
}

export default RacingCars;
