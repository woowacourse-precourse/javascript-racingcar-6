import { MissionUtils } from "@woowacourse/mission-utils";

// ** Car 클래스: 각 자동차의 상태 관리 **
class Car {
  //Car 클래스의 생성자 함수
  constructor(name) {
    this.name = name; // 자동차의 이름
    this.position = 0; // 자동차의 현재 위치 (전진한 횟수)
  }

  // 자동차 전진시키기
  advance() {
    if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
      this.position++;
    }
  }

  // 자동차의 현재 위치 출력
  async printPosition() {
    await MissionUtils.Console.print(`${this.name} : ${"-".repeat(this.position)}\n`);
  }
}

// ** Race 클래스: 자동차 경주 게임 진행 **
class Race {
  constructor(cars, tries) {
    this.cars = cars; // 경주에 참여하는 자동차들
    this.tries = tries; // 전체 시도 횟수
  }

  // 경주 시작 , 각 시도별로 전진 or 멈추기
  // 각 시도 후에 경주의 현재 상태 출력
  async run() {
    for (let i = 0; i < this.tries; i++) {
      this.cars.forEach(car => car.advance());
      await this.printRaceResult();
    }
  }

  //모든 자동차의 이름과 위치 출력
  async printRaceResult() {
    for (const car of this.cars) {
      await car.printPosition();
    }
    await MissionUtils.Console.print('\n');
  }

  //경주가 끝난 후 최종 우승자 결정
  findWinners() {
    const maxPosition = Math.max(...this.cars.map(car => car.position));
    return this.cars.filter(car => car.position === maxPosition).map(car => car.name);
  }
}

export default App;