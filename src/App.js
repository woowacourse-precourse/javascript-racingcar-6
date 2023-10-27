import { MissionUtils } from "@woowacourse/mission-utils";
import { ATTEMPTS_NUMBER, CAR_NAME } from "./constants/questions";

class App {
  constructor() {
    this.strCarName = "";
    this.arrCarName = [];
    this.attempts = [];
    this.race = [];
    this.winner = [];
  }
  async play() {
    // 1-a
    this.strCarName = await MissionUtils.Console.readLineAsync(CAR_NAME);
    // 1-b
    this.arrCarName = this.strCarName.split(",");
    // 1-c
    this.arrCarName.map((name) => {
      if (name.trim().length > 5 || name.trim().length < 1) {
        throw new Error(
          "[ERROR] : 자동차 이름은 5글자 이내로 입력해야 합니다!"
        );
      }
    });

    // 1-d
    this.attempts = await MissionUtils.Console.readLineAsync(ATTEMPTS_NUMBER);
    // 1-e
    if (this.attempts < 0 || isNaN(this.attempts) == true) {
      throw new Error(
        "[ERROR] : 시도 횟수가 잘못 입력되었습니다. 정수를 입력해주세요."
      );
    }

    // 2-a
    this.arrCarName.forEach((name) => {
      this.race.push([name, 0]);
    });
    // 2-b
    MissionUtils.Console.print("실행 결과");
    for (let i = 0; i < this.attempts; i++) {
      this.arrCarName.map((name, index) => {
        const result = MissionUtils.Random.pickNumberInRange(0, 9);
        if (result >= 4) {
          this.race[index][1]++;
        }
        // 2-c
        MissionUtils.Console.print(
          `${name} : ${"-".repeat(this.race[index][1])}`
        );
      });
      MissionUtils.Console.print(" ");
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
    MissionUtils.Console.print(`최종 우승자 : ${this.winner.join(", ")}`);
  }
}

export default App;
