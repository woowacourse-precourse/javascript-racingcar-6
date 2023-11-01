import { Random } from "@woowacourse/mission-utils";

//자동차 클래스
class Car {
  constructor(name) {
    this.name = name; //자동차 이름
    this.position = 0; //자동차 위치
  }

  //자동차 전진하기
  move() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.position++;
    }
  }
}

export default Car;
