import generateNumber from "../utils/generateNumber";
import SETTING from "../constants/setting";
import Car from "./Car";

class RacingApp {
  constructor() {
    this.cars = [];
  }

  setCars(names) {
    this.cars = names.map((name) => new Car(name, 0));
  }

  getCars() {
    return this.cars;
  }

  carMove() {
    this.cars.forEach((car) => {
      const randomNumber = generateNumber(
        SETTING.minRandomNumber,
        SETTING.maxRandomNumber
      );
      if (randomNumber >= SETTING.forward) car.move();
    });
  }

  getMaxCount() {
    const counts = this.cars.map((car) => car.getMoveCount());
    return Math.max(...counts);
  }

  getWinner(maxCount) {
    const winner = this.cars
      .filter((car) => car.getMoveCount() === maxCount)
      .map((car) => car.getName());
    return winner;
  }
}

export default RacingApp;
