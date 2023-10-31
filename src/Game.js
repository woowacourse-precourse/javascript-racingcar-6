import Car from "./Car.js";

class Game {
  constructor(carNames) {
    this.cars = [];
    carNames.forEach((car) => {
      const newCar = new Car(car);
      this.cars.push(newCar);
    });
  }
}

export default Game;
