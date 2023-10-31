export default class Car {
  constructor(name) {
    this.name = name;
    this.movement = 0;
  }

  carMove() {
    if(MissionUtils.Random.pickNumberInRange(0, 9) > 3) {
      this.movement += 1;
    }
  }

  getName() {
    return this.name;
  }

  getmovement() {
    return this.movement;
  }
}


