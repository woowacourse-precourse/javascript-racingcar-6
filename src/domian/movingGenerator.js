import { Random } from ("@woowacourse/mission-utils");
import { SYMBOL } from "../constants/constants";
// 전진 여부 판단
export class MovingGenerator {
  constructor() {
    this.progress = "";
  }
  canMove() {
    const randomNumber = Random.pickNumberInRange(1, 9);
    return randomNumber >= 4;
  }
  move() {
    if (this.canMove()) {
      this.progress += SYMBOL.MOVE
      return this.progress
    }
  }
}
