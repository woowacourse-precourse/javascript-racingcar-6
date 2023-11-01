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
import { MAX_CAR_NAME_LENGTH, MIN_ATTEMPT_NUMBER, MIN_CAR_NAME_LENGTH, MIN_MOVE_NUMBER } from "./constants/standard";

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

    this.preparationRace();
    this.startRace();

    this.sortResult();
    this.announceResult();
  }

  async getCarName() {
    this.strCarName = await MissionUtils.Console.readLineAsync(CAR_NAME);
  }
  checkCarName() {
    this.arrCarName = this.strCarName.split(CAR_NAME_STANDARD);
    this.arrCarName.map((name) => {
      if (name.trim().length > MAX_CAR_NAME_LENGTH || name.trim().length < MIN_CAR_NAME_LENGTH) {
        throw new Error(ERROR_CAR_NAME);
      }
    });
  }
  async getAttemptNumber() {
    this.attempts = await MissionUtils.Console.readLineAsync(ATTEMPTS_NUMBER);
  }
  checkAttemptNumber() {
    if (this.attempts < MIN_ATTEMPT_NUMBER || isNaN(this.attempts) == true) {
      throw new Error(ERROR_ATTEMPTS_NUMBER);
    }
  }

  preparationRace() {
    this.arrCarName.forEach((name) => {
      this.race.push([name, 0]);
    });
  }
  startRace() {
    MissionUtils.Console.print(EXECUTION_ENDS);
    for (let i = 0; i < this.attempts; i += 1) {
      this.goOrStop();
      MissionUtils.Console.print(RACE_RESULT_GAP);
    }
  }

  goOrStop() {
    this.arrCarName.map((name, index) => {
      const result = MissionUtils.Random.pickNumberInRange(0, 9);
      if (result >= MIN_MOVE_NUMBER) {
        this.race[index][1] += 1;
      }
      MissionUtils.Console.print(
        `${name} : ${RACE_RESULT.repeat(this.race[index][1])}`
      );
    });
  }

  sortResult() {
    this.race.sort((a, b) => {
      return b[1] - a[1];
    });
    for (const item of this.race) {
      if (item[1] == this.race[0][1]) {
        this.winner.push(item[0]);
      } else {
        break;
      }
    }
  }
  announceResult() {
    MissionUtils.Console.print(
      `${RACE_WINNER} : ${this.winner.join(WINNER_STANDARD)}`
    );
  }
}

export default App;
