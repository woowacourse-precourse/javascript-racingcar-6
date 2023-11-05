export class BaseCar {
  move() {
    throw new Error(
      'move 메서드를 구현해야 합니다. 난수를 생성하고 특정 값 이상일 때 자동차의 상태를 변경해야 합니다.'
    );
  }
  getCarStatus() {
    throw new Error(
      'getCarStatus 메서드를 구현해야 합니다. 자동차 상태를 반환해야 합니다.'
    );
  }
  getCarName() {
    throw new Error(
      'getCarName 메서드를 구현해야 합니다. 자동차 이름을 반환해야 합니다.'
    );
  }
}
