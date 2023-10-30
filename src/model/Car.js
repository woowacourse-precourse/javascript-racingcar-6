import { RANDOM_NUMBER_THRESHOLD } from "../utils/constants.js";

class Car {
  moveOrStop(randomNum) {
    if (randomNum >= RANDOM_NUMBER_THRESHOLD) {
      return 1;
    }
    if (randomNum < RANDOM_NUMBER_THRESHOLD) {
      return 0;
    }
  }
}

export default Car;