import generateRandomNumber from "./generateRandomNumber.js";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const couldMove = generateRandomNumber() >= 4;
    if (couldMove) {
      this.position++;
    }
  }
}

export default Car;