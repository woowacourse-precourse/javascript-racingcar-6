export class Racing {
  constructor() {
    this.attempt = attempt;
    this.cars = cars;
  }

  // 각 car마다 1회 레이스 실행
  race() {
    this.cars.forEach((car) => {
      car.MoveGenerator();
    });
  }

  // 한번의 레이스에서 자동차들의 결과값 저장

  // 최종 레이스 종료 후 모든 자동차의 결과값을 반환

  // 최대 이동거리 계산 후 우승자 반환
  getMaxProgress() {
    let maxProgress = 0;
    this.cars.forEach((car) => {
      car.MoveGenerator();
      maxProgress = Math.max(maxProgress, car.move());
    });
    return maxProgress;
  }

  getWinner() {
    let winnerList = [];
    if (car.totalMove === maxProgress) {
      winnerList.push(car);
    }
    return winnerList;
  }
}
