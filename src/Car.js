import { Random, Console } from "@woowacourse/mission-utils";

class Car {
  name = "";
  score = 0;

  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  printScore() {
    const number = Random.pickNumberInRange(0, 9);
    if (number >= 4) {
      this.score += 1;
    }
    const result = "-".repeat(this.score);
    Console.print(`${this.name} : ${result}`);
  }
}

export default Car;
