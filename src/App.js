import { MissionUtils } from "@woowacourse/mission-utils";
import RaceGame from "./RaceGame.js";

class App {
  constructor() {
    this.game = new RaceGame();
  }

  async play() {
    try {
      const carNames = await this.getCarNames();
      this.game.setCars(carNames);

      const rounds = await this.getRounds();
      this.game.setRounds(rounds);

      for (let i = 0; i < rounds; i++) {
        this.game.playRound();
        await this.printCurrentState();
      }
      await this.printWinner();
    } catch (error) {
      if (error.message.startsWith("[ERROR]")) {
        MissionUtils.Console.print(error.message);
        throw error;
      }
      throw error;
    }
  }

  async getCarNames() {
    const carNamesInput = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carNames = carNamesInput.split(",");
    this.validateCarNames(carNames);
    return carNames;
  }

  async getRounds() {
    const rounds = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    );
    this.validateRounds(rounds);
    return parseInt(rounds);
  }

  validateCarNames(names) {
    if (names.some((name) => name.length > 5 || name.length === 0)) {
      throw new Error("[ERROR] 자동차 이름은 1자 이상, 5자 이하만 가능합니다.");
    }
  }

  validateRounds(rounds) {
    if (isNaN(rounds) || parseInt(rounds) <= 0) {
      throw new Error("[ERROR] 시도할 횟수는 1 이상의 숫자여야 합니다.");
    }
  }

  async printCurrentState() {
    const currentState = this.game.getCurrentState();
    for (let car of currentState) {
      await MissionUtils.Console.print(
        `${car.name} : ${"-".repeat(car.position)}`
      );
    }
    await MissionUtils.Console.print("\n");
  }

  async printWinner() {
    const winners = this.game.getWinner();
    await MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

module.exports = App;
