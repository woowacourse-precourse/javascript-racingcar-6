import { Random } from "@woowacourse/mission-utils";
import Car from "./Car";

export default class Race {
  #cars = [];
  #trial;

  constructor(carNames) {
    carNames.split(",").forEach((name) => this.addCar(new Car(name)));
  }

  addCar(car) {
    this.#cars.push(car);
  }

  getCars() {
    return this.#cars;
  }

  setTrial(trial) {
    this.#trial = trial;
  }

  getTrial() {
    // setTrial로 설정한 값이 제대로 저장되었는지 확인하는 테스트 코드에 필요한 로직
    return this.#trial;
  }

  start() {
    for (let i = 0; i < this.#trial; i++) {
      this.#cars.forEach((car) => {
        const randomNumber = Random.pickNumberInRange(0, 9);
        car.move(randomNumber);
      });
    }
  }

  getWinners() {
    const maxPosition = Math.max(...this.#cars.map((car) => car.getPosition()));
    return this.#cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());
  }
}
