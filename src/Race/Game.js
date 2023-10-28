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
    const entryList = await this.entry();
    this.getIn(entryList);
  }

  async entry() {
    let isValid = false;
    while (!isValid) {
      const inputString = await this.input.get(this.constants.askNames);
      const arrayCars = inputString.split(",");
      if (this.verify.exceedLength(arrayCars)) {
        this.output.print(this.constants.exceeded);
        continue;
      }
      if (this.verify.findDuplicates(arrayCars)) {
        this.output.print(this.constants.duplicates);
        continue;
      }
      isValid = true;
      return arrayCars;
    }
  }

  getIn(array) {
    const newArray = [];
    array.forEach((name) => newArray.push(new Car(name)));
    this.getHowManyLaps(newArray);
  }

  async getHowManyLaps(carsArray) {
    const laps = await this.input.get(this.constants.tries);
    this.compete(carsArray, laps);
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
    console.log(carsArray);
  }

  render(array) {
    array.forEach((car) => {
      this.output.print(`${car.name}: ${car.showTrail(car.distance)}`);
    });
    this.output.print("\n");
  }
}
