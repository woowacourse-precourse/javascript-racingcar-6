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
  }

  async try() {
    let tryInput = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    this.tryInput = parseInt(tryInput, 10);
  }

  async process() {
    console.log("실행 결과");
    const roundResults = new Array(this.carNames.length).fill("");

    for (let i = 0; i < this.tryInput; i++) {
      for (let j = 0; j < this.carNames.length; j++) {
        const move = Math.floor(Math.random() * 10) >= 4 ? "-" : "";
        roundResults[j] += move;
      }

      this.carNames.forEach((carName, j) => {
        console.log(`${carName} : ${roundResults[j]}`);
      });
    }
  }

  async play() {
    await this.carName();
    await this.try();
    await this.process();
  }
}

export default App;

const app = new App();
app.play();
