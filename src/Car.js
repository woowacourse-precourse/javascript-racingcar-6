import InputError from "./InputError.js";
import { checkNameValid } from "./inputValidCheck.js";

class Car {
  constructor(name) {
    checkNameValid(name);
    this.name = name;
    this.dist = 0;
  }
}

export default Car;
