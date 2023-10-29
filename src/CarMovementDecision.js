import { Random } from "@woowacourse/mission-utils";

class CarMovementDecision {
  #randomNumber;
  getRandomNumber() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    this.#randomNumber = randomNumber;
    console.log(this.#randomNumber);
  }
}

export default CarMovementDecision;
