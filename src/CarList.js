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

  async setWinner() {
    const carStatesArr = this.cars.map((car) => car.getCarState());
    const currentStateLengthArr = this.cars.map(
      (car) => car.getCarState().currentStateLength,
    );

    const maxLength = currentStateLengthArr.reduce((acc, curr) => {
      return Math.max(acc, curr);
    });

    const winners = carStatesArr.filter((item) => {
      return item.currentStateLength === maxLength;
    });

    return winners.map((obj) => obj.carName);
  }
}

export default CarList;
