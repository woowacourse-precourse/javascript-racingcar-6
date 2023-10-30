import { Validation } from "./Validation.js";

export class Car {
  name;
  moveCount;

  constructor(name) {
    this.name = name;
    this.moveCount = 0;
  }

  moveOrStop() {
    if (Validation.validateGoForward()) {
      this.moveCount += 1;
    }
  }
}
