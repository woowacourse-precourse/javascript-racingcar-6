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
