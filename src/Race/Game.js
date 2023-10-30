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
    this.cars = [];
  }

  async init() {
    try {
      const entryList = await this.entry();
      this.createCars(entryList);
      const laps = await this.getLaps();
      this.startRace(laps);
    } catch (error) {
      this.output.print(error);
      throw error;
    }
  }

  async entry(inputString = null) {
    if (!inputString)
      inputString = await this.input.get(this.constants.askNames);
    const arrayCars = inputString.split(",");
    this.validateNames(arrayCars);
    return arrayCars;
  }

  validateNames(name) {
    if (this.verify.exceedLength(name))
      throw new Error(this.constants.exceeded);
    if (this.verify.findDuplicates(name))
      throw new Error(this.constants.duplicates);
    if (name.includes("") || name.includes(" "))
      throw new Error(this.constants.blank);
  }

  createCars(array) {
    this.cars = [];
    array.forEach((name) => this.cars.push(new Car(name)));
  }

  async getLaps() {
    const laps = await this.input.get(this.constants.tries);
    return laps;
  }

  startRace(laps) {
    let longestDistance = 0;
    let round = 1;

    while (longestDistance < laps) {
      this.cars.forEach((car) => {
        car.distance += car.didProceed();
        if (car.distance > longestDistance) longestDistance = car.distance;
      });
      this.output.print(`${round}라운드`);
      this.render(this.cars);
      round++;
    }
    this.whoDidWin(laps);
  }

  render(array) {
    array.forEach((car) => {
      this.output.print(`${car.name} : ${car.showTrail(car.distance)}`);
    });
    this.output.print("\n");
  }

  whoDidWin(laps) {
    const winners = this.cars.filter((car) => car.distance === parseInt(laps));
    let winner;

    if (winners.length >= 2) {
      const winnersName = winners.map((car) => car.name);
      this.output.print(`최종 우승자 : ${winnersName.join(", ")}`);
      return;
    }

    [winner] = winners;
    this.output.print(`최종 우승자 : ${winner.name}`);
  }
}
