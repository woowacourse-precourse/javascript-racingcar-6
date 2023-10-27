import { Input } from "../IO/Input.js";
import { Output } from "../IO/Output.js";
import Constants from "../Misc/constatns.js";
import { Cars } from "./Cars.js";

export class Game {
  constructor() {
    this.input = new Input();
    this.output = new Output();
    this.constants = new Constants();
    this.cars = new Cars();
    this.init();
  }

  async init() {
    const startingLine = await this.cars.add();
    const laps = await this.howManyLaps();
    console.log(startingLine, laps);
  }

  async howManyLaps() {
    const laps = await this.input.get(this.constants.tries);
    return laps;
  }
}
