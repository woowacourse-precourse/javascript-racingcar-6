import { Console, Random } from "@woowacourse/mission-utils";

export default class GameProgress {
  constructor(gameSettings) {
    this.settings = gameSettings;
    this.advance = Object.fromEntries(
      gameSettings.carNames.map((key) => [key, 0])
    );
  }

  proceed() {
    Object.keys(this.advance).forEach((carName) => {
      this.canMoveForward() && this.advance[carName]++;
    });
    this.printRoundResult();
  }

  getAdvance() {
    return this.advance;
  }

  printRoundResult() {
    Object.entries(this.advance).forEach(([carName, advance]) => {
      Console.print(`${carName} : ` + "-".repeat(advance));
    });
    Console.print("");
  }

  canMoveForward() {
    return Random.pickNumberInRange(0, 9) >= 4;
  }
}
