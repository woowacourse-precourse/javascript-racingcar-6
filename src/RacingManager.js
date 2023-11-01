import { Console, MissionUtils } from "@woowacourse/mission-utils";

class RacingManager {
  constructor() {
    this.carArr = [];
    this.trial = 0;
    this.randomNum = [];
    this.count = [];
  }

  async gameStart() {
    const car = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    const trial = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    Console.print("");

    this.carArr = car.split(",");
    this.trial = trial;
    this.count = new Array(this.carArr.length).fill(0);
  }

  async carStatus() {
    Console.print("실행 결과");

    for (let i = 0; i < this.trial; i++) {
      await this.ismove();

      for (let j = 0; j < this.carArr.length; j++) {
        Console.print(`${this.carArr[j]} : ${this.moveDegree(this.count[j])}`);
      }

      Console.print("");
      this.resetNum();
    }
  }

  async ismove() {
    while (this.randomNum.length < this.carArr.length) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.randomNum.includes(number)) {
        this.randomNum.push(number);
      }
    }

    for (let i = 0; i < this.randomNum.length; i++) {
      // Console.print(this.randomNum[i]);
      if (this.randomNum[i] >= 4) {
        this.count[i] += 1;
      }
    }
  }

  moveDegree(count) {
    let degreeString = "";
    for (let i = 0; i < count; i++) {
      degreeString += "-";
    }

    return degreeString;
  }

  whoWinner() {
    let highestScore = -1;
    const highestScoreIndices = [];

    for (let i = 0; i < this.count.length; i++) {
      const currentCount = this.count[i];

      if (currentCount > highestScore) {
        highestScore = currentCount;
        highestScoreIndices.length = 0;
        highestScoreIndices.push(i);
      } else if (currentCount === highestScore) {
        highestScoreIndices.push(i);
      }
    }

    const winners = highestScoreIndices.map((index) => this.carArr[index]);

    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }

  resetNum() {
    this.randomNum = [];
  }
}

export default RacingManager;
