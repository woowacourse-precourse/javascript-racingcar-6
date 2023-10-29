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

  findWinner() {
    let max = 0;
    for (let i = 0; i < this.carList.length; i++) {
      max = Math.max(max, this.carList[i].getLengthOfDist());
    }

    const WINNER_LIST = this.carList.filter(
      (car) => car.getLengthOfDist() === max
    );

    return WINNER_LIST;
  }
}

export default CarList;
