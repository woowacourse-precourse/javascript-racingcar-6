import { Random } from "@woowacourse/mission-utils";
import { afterMoveMessage } from "./Messages/Message";

/**
 * 자동차 객체 생성 클래스
 * @param {String} name 생성할 자동차의 이름
 * @this {String} name 생성된 자동차의 이름
 * @this {Number} countMove 자동차 이동 횟수
 * @this {String} showMove 자동차가 이동한 결과를 보여줄 때 사용할 변수
 */
class Car {
  constructor(name) {
    this.name = name;
    this.countMove = 0;
    this.showMove = "";
  }

  /**
   * 자동차의 이동 여부를 확인하고 이동할때 사용하는 메소드
   */
  move() {
    const RANDOM_NUMBER = Random.pickNumberInRange(0, 9);
    // 랜덤 숫자가 4 이상이면 이동
    if (RANDOM_NUMBER >= 4) {
      this.countMove += 1;
      this.showMove += "-";
    }
    afterMoveMessage(this.name, this.showMove);
  }
}

export default Car;
