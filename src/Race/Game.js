import { Input } from "../IO/Input.js";
import { Output } from "../IO/Output.js";
import Constants from "../Misc/constatns.js";
import { Verification } from "./Verification.js";
import { Car } from "./Car.js";

export class Game {
  constructor() {
    this.input = new Input();
    this.output = new Output();
    this.constants = new Constants();
    this.verify = new Verification();
  }

  async init() {
    try {
      const entryList = await this.entry();
      this.getIn(entryList);
    } catch (error) {
      this.output.print(error);
      throw error;
    }
  }

  async entry() {
    const inputString = await this.input.get(this.constants.askNames);
    const arrayCars = inputString.split(",");
    if (this.verify.exceedLength(arrayCars)) {
      this.output.print(this.constants.exceeded);
      throw new Error("[ERROR] 입력가능한 글자 수를 초과했습니다.");
    }
    if (this.verify.findDuplicates(arrayCars)) {
      this.output.print(this.constants.duplicates);
      throw new Error("[ERROR] 중복된 이름은 입력할 수 없습니다.");
    }
    return arrayCars;
  }

  getIn(array) {
    const newArray = [];
    array.forEach((name) => newArray.push(new Car(name)));
    this.getHowManyLaps(newArray);
  }

  async getHowManyLaps(carsArray) {
    const laps = await this.input.get(this.constants.tries);
    this.compete(carsArray, +laps);
  }

  compete(carsArray, laps) {
    let longestDistance = 0;
    let round = 1;

    while (longestDistance < laps) {
      carsArray.forEach((car) => {
        car.distance += car.didProceed();
        if (car.distance > longestDistance) longestDistance = car.distance;
      });
      this.output.print(`${round}라운드`);
      this.render(carsArray);
      round++;
    }
    this.whoDidWin(carsArray, laps);
  }

  render(array) {
    array.forEach((car) => {
      this.output.print(`${car.name} : ${car.showTrail(car.distance)}`);
    });
    this.output.print("\n");
  }

  whoDidWin(cars, laps) {
    const winners = cars.filter((car) => car.distance === laps);
    console.log(winners);

    if (winners.length >= 2) {
      const winnersName = winners.map((car) => car.name);
      this.output.print(`최종 우승자 : ${winnersName.join(", ")}`);
      return;
    }

    let winner;
    [winner] = winners;
    this.output.print(`최종 우승자 : ${winner.name}`);
  }
}
