import { SYMBOL } from "../constants/constants";
import InputView from "../view/inputView";

class Car {
  #car;

  constructor(car) {
    this.#car = car;
    this.progress = 0;
  }

  // 이동 여부 판단 후 이동 결과 반환
  MoveGenerator() {
    const randomNumber = Random.pickNumberInRange(1, 9);
    if (randomNumber > 4) {
      this.progress++;
    }
    return progress;
  }
}

export default Car;
