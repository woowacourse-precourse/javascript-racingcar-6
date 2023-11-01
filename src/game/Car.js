import { pickNumberInRange } from '../utility/random.js';
import { isWithinFourToNine } from '../utility/validation.js';
import { getHyphens } from '../utility/string.js';
import { print } from '../utility/console.js';

class Car {
  #name = '';

  #stepCount = 0;

  constructor(name) {
    this.#name = name;
    this.#stepCount = 0;
  }

  #moveOneStep() {
    this.#stepCount += 1;
  }

  tryToMove() {
    const randomNumber = pickNumberInRange(0, 9);
    if (isWithinFourToNine(randomNumber)) this.#moveOneStep();
  }

  printStepState() {
    print(`${this.#name} : ${getHyphens(this.#stepCount)}`);
  }

  compareAndUpdateMaxStepCount(maxStepCount) {
    return Math.max(maxStepCount, this.#stepCount);
  }

  isStepCountEqualToMax(maxStepCount) {
    if (this.#stepCount === maxStepCount) return this.#name;
  }
}

export default Car;