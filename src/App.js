import { MissionUtils } from "@woowacourse/mission-utils";
import { ATTEMPTS_NUMBER, CAR_NAME } from "./constants/questions";
import { ERROR_ATTEMPTS_NUMBER, ERROR_CAR_NAME } from "./constants/errors";
import { CAR_NAME_STANDARD, WINNER_STANDARD } from "./constants/separations";
import {
  EXECUTION_ENDS,
  RACE_RESULT,
  RACE_RESULT_GAP,
  RACE_WINNER,
} from "./constants/notices";

class App {
  constructor() {
    this.strCarName = "";
    this.arrCarName = [];
    this.attempts = [];
    this.race = [];
    this.winner = [];
  }
  async play() {
    await this.getCarName();
    this.checkCarName();
    await this.getAttemptNumber();
    this.checkAttemptNumber();

    // 2-a
    this.arrCarName.forEach((name) => {
      this.race.push([name, 0]);
    });
    // 2-b
    MissionUtils.Console.print(EXECUTION_ENDS);
    for (let i = 0; i < this.attempts; i++) {
      this.arrCarName.map((name, index) => {
        const result = MissionUtils.Random.pickNumberInRange(0, 9);
        if (result >= 4) {
          this.race[index][1]++;
        }
        // 2-c
        MissionUtils.Console.print(
          `${name} : ${RACE_RESULT.repeat(this.race[index][1])}`
        );
      });
      MissionUtils.Console.print(RACE_RESULT_GAP);
    }

    // 3-a
    this.race.sort((a, b) => {
      return b[1] - a[1];
    });
    // 3-b
    for (const item of this.race) {
      if (item[1] == this.race[0][1]) {
        this.winner.push(item[0]);
      } else {
        break;
      }
    }
    // 3-c
    MissionUtils.Console.print(
      `${RACE_WINNER} : ${this.winner.join(WINNER_STANDARD)}`
    );
  }

  async getCarName() {
    this.strCarName = await MissionUtils.Console.readLineAsync(CAR_NAME);
  }
  checkCarName() {
    this.arrCarName = this.strCarName.split(CAR_NAME_STANDARD);
    this.arrCarName.map((name) => {
      if (name.trim().length > 5 || name.trim().length < 1) {
        throw new Error(ERROR_CAR_NAME);
      }
    });
  }
  async getAttemptNumber() {
    this.attempts = await MissionUtils.Console.readLineAsync(ATTEMPTS_NUMBER);
  }
  checkAttemptNumber() {
    if (this.attempts < 0 || isNaN(this.attempts) == true) {
      throw new Error(ERROR_ATTEMPTS_NUMBER);
    }
  }
}

export default App;
