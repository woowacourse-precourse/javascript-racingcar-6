// 시도할 횟수 저장
// 입력된 횟수만큼 게임 돌리기
// 각 레이스마다 게임 결과 출력
// 모든 레이스가 끝난 뒤 자동차 간 전진 기록 비교 후 우승자 출력

export class Racing {
  constructor() {
    this.attempt = attempt;
    this.cars = cars;
  }

  get Attempt() {
    return this.attempt;
  }

  // 각 car마다 1회 레이스 실행
  race() {
    this.cars.forEach((car) => {
      car.move();
    });
  }

  // 한번의 레이스에서 자동차들의 결과값 저장

  // 최종 레이스 종료 후 모든 자동차의 결과값을 반환

  // 최대 이동거리 계산 후 우승자 반환
  getMaxProgress() {
    let maxProgress = 0;
    this.cars.forEach((car) => {
      car.move();
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
