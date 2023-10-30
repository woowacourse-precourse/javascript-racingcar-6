// 자동차들을 배열로 저장하고
// 전진 가능한 자동차(판단은 무빙제너레이터가) 판단
// 각 자동차마다 레이스 당 전진 기록 저장 후 결과 반환
// 이긴 자동차 반환

import InputView from "../view/inputView";

class Car {
  #cars;

  constructor(cars) {
    this.#cars = cars;
    this.progress = "";
  }

  get cars() {
    return this.#cars;
  }

  // 이동 여부 판단
  canMove() {
    const randomNumber = Random.pickNumberInRange(1, 9);
    return randomNumber >= 4;
  }
  // 이동하고 문자열로 경로 생성
  move() {
    if (this.canMove()) {
      this.progress += SYMBOL.MOVE;
      return this.progress; // '---'
    }
  }
}

export default Car;
