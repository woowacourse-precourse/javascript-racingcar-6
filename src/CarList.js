class CarList {
  constructor() {
    this.cars = [];
  }

  add(car) {
    this.cars.push(car);
  }

  race() {
    this.cars.forEach((car) => car.move());
  }

  printCarCurrnetState() {
    this.cars.forEach((car) => car.printCarData());
  }
}

export default CarList;
