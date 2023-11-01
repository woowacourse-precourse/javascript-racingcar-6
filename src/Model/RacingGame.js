import Car from "./Car";
import { Random } from "@woowacourse/mission-utils";

class RacingGame {
  // Car은 name으로 생성하고, move(random)으로 전진.
  #cars;
  #gametry;
  #carsscore;

  constructor(carinputs, gametrynum) {
    this.#cars = carinputs.split(",").map((item) => new Car(item)); // Car의 배열
    this.#gametry = gametrynum;
  }

  game(trynum) {
    while (trynum--) {
      this.#carsscore = this.CarsRandomGenerator(this.#cars);

      this.#cars.forEach((car, score) => car.move(this.#carsscore[score]));
    }

    return this.#cars;
  }

  CarsRandomGenerator(cars) {
    let random = new Array(cars).fill(0);
    for (let i = 0; i < cars.length; ++i) {
      let randomnum = Random.pickNumberInRange(0, 9);
      random.push(randomnum);
    }

    return random;
  }
}

export default RacingGame;
