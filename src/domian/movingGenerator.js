// 시도할 횟수 저장
// 입력된 횟수만큼 게임 돌리기
// 각 레이스마다 게임 결과 출력
// 모든 레이스가 끝난 뒤 자동차 간 전진 기록 비교 후 우승자 출력

export class MovingGenerator {
  #attempt;

  constructor() {
    this.#attempt = attempt;
    this.progress = "";
  }

  get Attempt() {
    return this.#attempt;
  }

  canMove() {
    const randomNumber = Random.pickNumberInRange(1, 9);
    return randomNumber >= 4;
  }

  move() {
    if (this.canMove()) {
      this.progress += SYMBOL.MOVE;
      return this.progress; // '---'
    }
  }
}
