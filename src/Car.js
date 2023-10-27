import { GO_SYMBOL, RANDOM } from "./constant/rule";

class Car {
  constructor(name) {
    this.name = name;
    this.result = "";
  }

  decideGo(randomNumber) {
    if (randomNumber >= RANDOM.CAN_GO_NUM) {
      this.result += GO_SYMBOL;
    }
  }

  getCurrentCarState() {
    return [this.name, this.result];
  }
}

export default Car;
