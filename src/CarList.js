import Car from "./Car.js";

class CarList {
  carList = [];

  constructor(carList) {
    this.carList = carList.map((name) => new Car(name));
  }

  oneRound() {
    this.carList.forEach((car) => {
      car.goIfNumberIsLagerThanThree();
      car.printResult();
    });
  }
}

export default CarList;
