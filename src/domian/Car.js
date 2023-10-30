// 자동차들을 배열로 저장하고
// 전진 가능한 자동차(판단은 무빙제너레이터가) 판단
// 각 자동차마다 레이스 당 전진 기록 저장 후 결과 반환
// 이긴 자동차 반환

import InputView from "../view/inputView";

class Car {
  constructor(car) {
    this.car = car;
    this.moveCount = 0;
  }

  // 자동차 이름 하나 가져오기 -> '콩순이'
  get car() {
    return this.car;
  }

  // 이동 여부 판단
  canMove() {
    const randomNumber = Random.pickNumberInRange(1, 9);
    return randomNumber >= 4;
  }
  // 이동하고 총 몇번 이동했는지 세놓기
  move() {
    if (this.canMove()) {
      this.moveCount++;
    }
    const totalMove = this.moveCount;
    return totalMove;
  }
}

export default Car;
