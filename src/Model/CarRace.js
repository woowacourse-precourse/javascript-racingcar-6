import Car from "./Car.js";
import { CAR, CAR_ARRAY, CAR_NAME } from "../constants/car.js";

class CarRace {
  #cars = [];
  #carNameList;
  #raceCount;
  #finalResult;

  constructor(carNameList, raceCount) {
    this.#carNameList = carNameList;
    this.#raceCount = raceCount;
    this.#createCars();
  }

  #createCars() {
    this.#carNameList.forEach((name) => this.#cars.push(new Car(name)));
  }

  doRace() {
    const raceResult = Array.from({ length: this.#raceCount }).map(() => {
      return this.#moveCars();
    });
    this.#finalResult = raceResult.at(CAR_ARRAY.LAST_INDEX);
    return raceResult;
  }

  #moveCars() {
    return this.#cars.map((car) => car.move());
  }

  determineWinner() {
    const winners = [];
    let winnerPosition = CAR.INITIAL_WINNER_POSITION;
    this.#finalResult.forEach(({ position, name }) => {
      if (position > winnerPosition) {
        winners.length = CAR_ARRAY.RESET;
        winners.push(name);
        winnerPosition = position;
      } else if (position === winnerPosition) {
        winners.push(name);
      }
    });
    return winners.join(CAR_NAME.JOIN_SEPARATOR);
  }
}

export default CarRace;
