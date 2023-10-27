import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.currentMovements = {};
  }

  async readUserRaceCarName() {
    try {
      const raceCarName = await MissionUtils.Console.readLineAsync(
        `${"경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"}\n`,
      );
      const validNames = raceCarName.split(",").map((name) => name.trim());
      for (const name of validNames) {
        if (name.length > 5) {
          throw new Error();
        }
      }

      for (const name of validNames) {
        this.currentMovements[name] = "";
      }

      const tryCount = await this.userTryCount();

      for (let i = 0; i < tryCount; i++) {
        this.playGame(validNames);
      }
      const winners = this.calculateWinners(validNames);
      MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
    } catch (e) {
      throw new Error("[ERROR] 잘못된 문자 형식입니다.");
    }
  }

  async userTryCount() {
    try {
      const tryCount = await MissionUtils.Console.readLineAsync(
        `${"시도할 횟수는 몇 회인가요?"}\n`,
      );
      MissionUtils.Console.print("실행 결과");
      return parseInt(tryCount, 10);
    } catch (e) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  playGame(validNames) {
    for (const name of validNames) {
      const movement = this.calcMoveCount();
      this.currentMovements[name] += movement;
      MissionUtils.Console.print(`${name} : ${this.currentMovements[name]}`);
    }
    MissionUtils.Console.print(" ");
  }

  calcMoveCount() {
    const raceCarMoveCount = MissionUtils.Random.pickNumberInRange(0, 9);
    return raceCarMoveCount >= 4 ? "-" : "";
  }

  calculateWinners(names) {
    const winners = [];
    let maxDashes = 0;

    for (const name of names) {
      const dashes = (this.currentMovements[name].match(/-/g) || []).length;
      if (dashes > maxDashes) {
        maxDashes = dashes;
        winners.length = 0;
        winners.push(name);
      } else if (dashes === maxDashes) {
        winners.push(name);
      }
    }

    return winners;
  }

  async play() {
    await this.readUserRaceCarName();
  }
}

export default App;
