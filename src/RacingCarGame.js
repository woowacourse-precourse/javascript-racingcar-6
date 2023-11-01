import { RacingCar } from './RacingCar.js';
import { Input } from './utils/Input.js';
import { Output } from './utils/Output.js';
import { Random } from "@woowacourse/mission-utils";

class RacingCarGame { 
  #cars;

  constructor() {
    this.#cars = [];
  }
  
  async start() { 
    const cars = await Input.racingCar();
    this.#car(cars);
    const count = await Input.racingCount();
    for(let i=0; i < count; i++) this.run();
    this.quit();
  }

  #car(cars) {
    cars.forEach((car) => this.#cars.push(new RacingCar(car)));
  }
  
  run() {
    Output.result();
    this.#cars.forEach((car) => {
      let random = Random.pickNumberInRange(0, 9);
      if (random > 3) car.move();
      Output.racingResult(car, random);
    })
  }

  findWinner() {
    const maxDistance = Math.max(...this.#cars.map((car) => car.getDistance()));
    return this.#cars.filter((car) => car.getDistance() === maxDistance).map((car) => car.getName());
  }

  quit() {
    Output.winner(this.findWinner());
  }
}

export { RacingCarGame };