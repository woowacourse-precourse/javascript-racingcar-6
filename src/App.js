import { Random, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.raceCount = "";
    this.carNames = [];
    this.raceResults = [];
  }

  async play() {
    await this.startRacing();
  }

  async startRacing() {
    const carNamesInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분))"
    );
    this.carNames = carNamesInput.split(",");

    await this.validation(this.carNames);
    Console.print(this.carNames);

    const raceCount = Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    Console.print(raceCount);

    for (let i = 0; i < raceCount; i++) {
      await this.forwardOrStop();
      await this.raceRoundMessage();
    }
    await this.whoIsWinner();
  }

  async validation(carNames) {
    carNames.forEach((carName) => {
      if (carName.length > 5) throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
    });
  }

  async forwardOrStop() {
    // 랜덤 값에 따라 전진 또는 정지
    this.carNames.map((carName, index) => {
      const random = Random.pickNumberInRange(0, 9);
      this.raceResults[index] = this.raceResults[index] || 0;
      if (random >= 4) {
        this.raceResults[index] += 1;
      }
    });
  }

  async raceRoundMessage() {
    this.carNames.forEach((carName, index) => {
      const forwardCount = this.raceResults[index];
      Console.print(`${carName} : ${"-".repeat(forwardCount)}\n`);
    });
  }

  async whoIsWinner() {
    // raceResults 의 최대값을 비교해서 우승자를 출력
    const forwardCount = this.raceResults;
    const maxForwardCount = Math.max(...forwardCount);
    const winners = this.carNames.filter((carName, index) => {
      return forwardCount[index] === maxForwardCount;
    });
    if (winners.length === 1) {
      Console.print(`최종 우승자 : ${winners[0]}`);
    } else {
      Console.print(`최종 우승자 : ${winners.join(", ")}`);
    }
  }
}

export default App;
