import { SYMBOL } from "../constants/constants";
import InputView from "../view/inputView";

class Car {
  #car;

  constructor(cars) {
    this.#car = car;
    this.progress = 0;
  }

  get car() {
    return this.#car;
  }
  get progress() {
    return this.progress;
  }

  set progress(progress) {
    this.progress.push(MESSAGE.move);
  }

  // 이동 여부 판단 후 이동 결과 출력
  MoveGenerator() {
    const randomNumber = Random.pickNumberInRange(1, 9);

    if (randomNumber > 4) {
      this.progress++;
    }
    const result = `${this.car} : ${SYMBOL.MOVE.repeat(this.progress)}`;
    return result;
  }
}

export default Car;
