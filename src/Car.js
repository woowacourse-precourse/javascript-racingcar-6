import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    if(name.length > 5) throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
    this.name = name;
    this.position = "";
  }

  move() {
    const value = MissionUtils.Random.pickNumberInRange(0, 9);
    if(value > 4) this.position += "-";
  }

  getPosition() {
    return MissionUtils.Console.print(`${this.name}: ${this.position}`);
  }

  getName() {
    return this.name;
  }
};

export default Car;