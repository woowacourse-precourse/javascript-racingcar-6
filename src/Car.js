import { Random } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.move = 0;
  }

  static entryPlayer(carName) {
    this.carList = [];
    carName.forEach((el) => {
      const car = new Car(el);
      this.carList.push(car);
    });
    return this.carList;
  }
  generateRandomNum() {
    this.RANDOM_NUMBER = Random.pickNumberInRange(0, 9);
    return this.RANDOM_NUMBER;
  }

  setMove() {
    this.CAR_MOVE = 4;
    this.GET_RANDOM = this.generateRandomNum();
    if (this.GET_RANDOM >= this.CAR_MOVE) {
      this.move += 1;
    }
  }

  getName() {
    return this.name;
  }

  getMove() {
    return this.move;
  }
}

export default Car;
