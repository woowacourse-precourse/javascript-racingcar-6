import { Car } from "./Car";
import { pickProgressRandomBool } from "../utils/calc";

export class RacingGame {
  constructor(names) {
    this.cars = names.map((name) => new Car(name));
  }

  playSingleRound() {
    this.cars.forEach((car) => {
      if (pickProgressRandomBool()) car.move();
    });
    return this.cars;
  }
}
