class CarModel {
  #carList;

  constructor(cars) {
    this.#carList = cars.map((car) => ({ name: car, move: '' }));
  }
}

export default CarModel;
