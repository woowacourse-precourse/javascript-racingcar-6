import { pickNumberInRange } from '../utility/random.js';
import { isWithinFourToNine } from '../utility/validation.js';

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
}

export default Car;