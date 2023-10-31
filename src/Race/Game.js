import Input from "../IO/Input.js";
import Output from "../IO/Output.js";
import Constants from "../Misc/Constatns.js";
import Verification from "./Verification.js";
import Car from "./Car.js";

export default class Game {
  constructor() {
    this.input = new Input();
    this.cars = [];
  }

  async init() {
    try {
      const entryList = await this.entry();
      this.createCars(entryList);
      const laps = await this.getLaps();
      this.startRace(laps);
    } catch (error) {
      Output.print(error);
      throw error;
    }
  }

  async entry(inputString = null) {
    if (!inputString) inputString = await this.input.get(Constants.askNames);
    const arrayCars = inputString.split(",");
    this.validateNames(arrayCars);
    return arrayCars;
  }

  validateNames(name) {
    // if (this.verify.exceedLength(name))
    if (Verification.exceedLength(name)) throw new Error(Constants.exceeded);
    if (Verification.findDuplicates(name))
      throw new Error(Constants.duplicates);
    if (name.includes("") || name.includes(" "))
      throw new Error(Constants.blank);
  }

  createCars(array) {
    this.cars = [];
    array.forEach((name) => this.cars.push(new Car(name)));
  }

  async getLaps() {
    const laps = await this.input.get(Constants.tries);
    return parseInt(laps, 10);
  }

  startRace(laps) {
    let longestDistance = 0;
    let round = 1;

    while (longestDistance < laps) {
      this.cars.forEach((car) => {
        car.distance += car.didProceed();
        if (car.distance > longestDistance) longestDistance = car.distance;
      });
      Output.print(`${round}라운드`);
      this.render(this.cars);
      round += 1;
    }
    this.whoDidWin(laps);
  }

  render(array) {
    array.forEach((car) => {
      Output.print(`${car.name} : ${car.showTrail(car.distance)}`);
    });
    Output.print("\n");
  }

  whoDidWin(laps) {
    const winners = this.cars.filter((car) => car.distance === laps);
    let winner;

    if (winners.length >= 2) {
      const winnersName = winners.map((car) => car.name);
      Output.print(`최종 우승자 : ${winnersName.join(", ")}`);
      return;
    }

    [winner] = winners;
    Output.print(`최종 우승자 : ${winner.name}`);
  }
}
