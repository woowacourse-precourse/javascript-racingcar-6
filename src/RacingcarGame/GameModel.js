import Car from "./Cars";

class GameModel {
  constructor(carNames, attempts) {
    this.cars = carNames.map((name) => new Car(name));
    this.attempts = attempts;
    this.controller = null;
  }

  registerController(controller) {
    this.controller = controller;
  }

  run() {
    for (let attempt = 0; attempt < this.attempts; attempt++) {
      this.cars.forEach((car) => car.move());
      this.controller.updateCarProgress(this.cars);
    }
  }

  getWinner() {
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    return this.cars.filter((car) => car.position === maxPosition);
  }
}

export default GameModel;
