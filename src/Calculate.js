import { SEPARATOR } from "./constant/rule";

class Calculate {
  constructor() {
    this.max = 0;
    this.winners = [];
  }

  calcWinners(name, result) {
    if (result.length === this.max) {
      this.winners.push(name);
    }

    if (result.length > this.max) {
      this.max = result.length;
      this.winners = [name];
    }
  }

  getWinners() {
    return this.winners.join(SEPARATOR.WINNERS);
  }
}

export default Calculate;
