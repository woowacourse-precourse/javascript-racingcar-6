import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class CarRace {
  #cars = [];
  #carNameList;
  #raceCount;
  #finalResult;

  constructor(carNameList, raceCount) {
    this.#carNameList = carNameList;
    this.#raceCount = raceCount;
    this.#createCar();
  }

  #createCar() {
    this.#carNameList.forEach((name) => this.#cars.push(new Car(name)));
  }

  doRace() {
    const raceResult = Array.from({ length: this.#raceCount }).map(() => {
      return this.#moveCars();
    });
    this.#finalResult = raceResult.at(-1);
    return raceResult;
  }

  #moveCars() {
    return this.#cars.map((car) => car.move());
  }

  determineWinner() {
    const winners = [];
    let winnerPosition = 0;
    this.#finalResult.forEach(({ position, name }) => {
      if (position > winnerPosition) {
        winners.length = 0;
        winners.push(name);
        winnerPosition = position;
      } else if (position === winnerPosition) {
        winners.push(name);
      }
    });
    return winners.join(", ");
  }
}

export default CarRace;
