import { Random } from "@woowacourse/mission-utils";
import NUMBER from "../constants/NUMBER.js";
import Car from "./Car.js";

class RacingGame {
  #carList = [];
  #count = 0;

  constructor(carNameList, count) {
    this.carList = carNameList.map((carName) => new Car(carName));
    this.count = count;
  }

  get carList() {
    return this.#carList;
  }
  set carList(carList) {
    this.#carList = carList;
  }

  get count() {
    return this.#count;
  }
  set count(count) {
    this.#count = count;
  }

  get gameStatus() {
    return this.#carList.reduce((arr, car) => [...arr, car.carStatus], []);
  }

  get winner() {
    const longest = this.#findLongestDistance();
    const winners = this.#findCarsAtDistance(longest);

    return winners.reduce((arr, winner) => [...arr, winner.carName], []);
  }

  get isGameEnd() {
    return this.count === 0;
  }

  #findLongestDistance() {
    return this.#carList.reduce(
      (max, car) => (car.distance > max ? car.distance : max),
      0
    );
  }

  #findCarsAtDistance(distance) {
    return this.#carList.reduce(
      (arr, car) => (car.distance === distance ? [...arr, car] : arr),
      []
    );
  }

  #getRandomNumber() {
    return Random.pickNumberInRange(NUMBER.RANDOM.MIN, NUMBER.RANDOM.MAX);
  }

  moveAllCars() {
    if (this.isGameEnd) return;

    this.count--;
    this.carList.forEach((car) => {
      const random = this.#getRandomNumber();
      random >= NUMBER.RANDOM.THRESHOLD && car.move(1);
    });
  }
}

export default RacingGame;
