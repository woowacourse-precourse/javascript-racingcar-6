import { Console } from "@woowacourse/mission-utils";

class Player {
  #attemptIterations;

  constructor(attemptIterations) {
    this.#attemptIterations = attemptIterations;
  }

  static async setattemptIterations() {
    const attemptIterationsObject =
      await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    const attemptIterations = parseInt(attemptIterationsObject, 10);

    if (Number.isNaN(attemptIterations)) {
      throw new Error("[ERROR] 시도 횟수는 숫자여야 합니다.");
    }

    if (attemptIterations <= 0) {
      throw new Error("[ERROR] 시도 횟수는 1 이상입니다.");
    }

    return new Player(JSON.stringify(attemptIterations));
  }

  getattemptIteraions() {
    return this.#attemptIterations;
  }
}

export default Player;
