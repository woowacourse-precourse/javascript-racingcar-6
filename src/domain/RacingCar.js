import { Random } from '@woowacourse/mission-utils';

class RacingCar {
  #START_INCLUSIVE = 0;
  #END_INCLUSIVE = 9;
  #STANDARD_NUMBER = 4;
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
  }

  tryToMoveForward() {
    const randomNumber = Random.pickNumberInRange(
      this.#START_INCLUSIVE,
      this.#END_INCLUSIVE,
    );
    if (this.#STANDARD_NUMBER <= randomNumber) this.moveForward();
  }

  moveForward() {
    this.moveCount += 1;
  }
}

export default RacingCar;
