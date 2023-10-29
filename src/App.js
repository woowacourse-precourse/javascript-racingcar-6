import { MissionUtils } from "@woowacourse/mission-utils";

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

export default App;