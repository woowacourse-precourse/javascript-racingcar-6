import { Input } from "../IO/Input.js";
import { Output } from "../IO/Output.js";
import Constants from "../Misc/constatns.js";
import { Verification } from "./Verification.js";

export class Cars {
  constructor() {
    this.input = new Input();
    this.output = new Output();
    this.constants = new Constants();
    this.verify = new Verification();
  }

  async add() {
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
    }
    return arrayCars;
  }
}
