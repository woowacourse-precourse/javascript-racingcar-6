import Car from '../models/Car.js';
import { MESSAGE } from '../constant.js';
import View from '../views/View.js';

class Controller {
  #cars;

  #maxRun;

  constructor() {
    this.#cars = [];
    this.winners = [];
  }

  async play() {
    await this.makeRaceCar();
    await this.askMaxRun();
    this.executeAsMaxRun();
    this.findWinners();
    this.printWinner();
  }

  async makeRaceCar() {
    const answer = await View.askNameAnswer(MESSAGE.ask_car_name);
    answer.forEach((name) => this.#cars.push(new Car(name)));
  }

  async askMaxRun() {
    const answer = await View.askExecutionNumber(MESSAGE.ask_number_of_time);
    this.#maxRun = answer;
  }

  executeAsMaxRun() {
    View.print(MESSAGE.empty);
    View.print(MESSAGE.execution_result);
    Array.from({ length: this.#maxRun }).forEach(() => {
      this.moveCarAndPrint();
      View.print(MESSAGE.empty);
    });
  }

  moveCarAndPrint() {
    this.#cars.forEach((car) => {
      car.move();
      View.roundPrint(car.getName(), car.getDistance());
    });
  }

  findWinners() {
    let maxMoved = 0;
    this.#cars.forEach((car) => {
      const distance = car.getDistance();
      if (distance > maxMoved) maxMoved = distance;
    });
    this.#cars.forEach((car) => {
      const distance = car.getDistance();
      if (maxMoved === distance) this.winners.push(car);
    });
  }

  printWinner() {
    const winnerList = this.winners.map((winner) => winner.getName());
    View.winnerPrint(winnerList);
  }
}

export default Controller;
