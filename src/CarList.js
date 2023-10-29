import Car from "./Car.js";

class CarList {
  carList = [];

  constructor(carList) {
    this.carList = carList.map((name) => new Car(name));
  }
}

export default CarList;
