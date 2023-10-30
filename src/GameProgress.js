import { Console, Random } from "@woowacourse/mission-utils";

export default class GameProgress {
  constructor(gameSettings) {
    this.settings = gameSettings;
    this.advance = Object.fromEntries(
      gameSettings.carNames.map((key) => [key, 0])
    );
  }

  proceed() {
    for (const carName in this.advance) {
      if (this.canMoveForward()) this.advance[carName]++;
    }
    this.printRoundResult();
  }

  getAdvance() {
    return this.advance;
  }

  printRoundResult() {
    for (const carName in this.advance) {
      Console.print(`${carName} : ` + "-".repeat(this.advance[carName]));
    }
    Console.print("");
  }

  canMoveForward() {
    return Random.pickNumberInRange(0, 9) >= 4;
  }
}
