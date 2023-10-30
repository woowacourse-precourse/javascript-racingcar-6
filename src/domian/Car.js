// 자동차들을 배열로 저장하고
// 전진 가능한 자동차(판단은 무빙제너레이터가) 판단
// 각 자동차마다 레이스 당 전진 기록 저장 후 결과 반환
// 이긴 자동차 반환

import InputView from "../view/inputView";

class Car {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  get cars() {
    return this.#cars;
  }

  printProgress() {
    const progress = MovingGenerator.move();
  }

  compareCarsAndGetWinner() {}
}

export default Car;
