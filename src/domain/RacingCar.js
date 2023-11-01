import { Random } from '@woowacourse/mission-utils';

class RacingCar {
  #START_INCLUSIVE = 0;
  #END_INCLUSIVE = 9;
  #STANDARD_NUMBER = 4;

  #name;
  #moveCount;
  constructor(name) {
    this.#name = name;
    this.#moveCount = 0;
  }

  showResultTo(referee, round) {
    referee.recordResult(this.#name, this.#moveCount, round);
  }

  tryToMoveForward() {
    if (this.#isQualifiedForMovingForward()) this.#moveForward();
  }

  #isQualifiedForMovingForward() {
    const randomNumber = Random.pickNumberInRange(
      this.#START_INCLUSIVE,
      this.#END_INCLUSIVE,
    );
    return this.#STANDARD_NUMBER <= randomNumber;
  }

  #moveForward() {
    this.#moveCount += 1;
  }
}

export default RacingCar;
