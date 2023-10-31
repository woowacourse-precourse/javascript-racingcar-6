import Car from '../models/car.js';

class CarService {
  #carList;

  constructor() {
    this.#carList = [];
  }

  addCar(carName) {
    const newCar = new Car(carName);
    this.#carList.push(newCar);
  }

  getCarList() {
    return this.#carList;
  }
}

export default CarService;
