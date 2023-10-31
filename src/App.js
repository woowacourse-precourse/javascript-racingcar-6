import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.roundResults = [];
    this.tryInput = 0;
    this.carNames = [];
  }

  async carName() {
    let carNameInput = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    this.carNames = carNameInput.split(",");

    for (const carName of this.carNames) {
      if (carName.length >= 6) {
        throw new Error("[ERROR] 자동차 이름은 5글자 이하여야 합니다.");
      }
    }
  }

  async try() {
    let tryInput = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    if (!/^\d+$/.test(tryInput)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }

    this.tryInput = parseInt(tryInput, 10);
  }

  async process() {
    console.log("\n실행 결과");
    const roundResults = new Array(this.carNames.length).fill("");
    for (let i = 0; i < this.tryInput; i++) {
      for (let j = 0; j < this.carNames.length; j++) {
        const move = MissionUtils.Random.pickNumberInRange(0, 9) >= 4 ? "-" : "";
        roundResults[j] += move;
      }

      this.carNames.forEach((carName, j) => {
        console.log(`${carName} : ${roundResults[j]}`);
      });
      console.log("");
    }
    const maxDistance = Math.max(...roundResults.map((result) => result.length));
    const winners = this.carNames.filter((carName, index) => roundResults[index].length === maxDistance);
    console.log(`최종 우승자 : ${winners.join(", ")}`);
  }

  async play() {
    try {
      await this.carName();
      await this.try();
      await this.process();
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default App;