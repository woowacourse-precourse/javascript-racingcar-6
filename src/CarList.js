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
}

export default CarList;
