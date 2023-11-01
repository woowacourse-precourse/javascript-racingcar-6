import { Console } from "@woowacourse/mission-utils";

export default class GameResult {
  constructor(advance) {
    this.advance = advance;
  }

  printWinners() {
    Console.print(`최종 우승자 : ${this.determineWinners().join(", ")}`);
  }
  
  determineWinners() {
    const max = Math.max(...Object.values(this.advance));
    return Object.keys(this.advance).filter((key) => this.advance[key] === max);
  }
}
