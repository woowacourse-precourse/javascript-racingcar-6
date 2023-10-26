import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    this.carParticipants();
    // this.numberOfTries();
  }

  async carParticipants() {
    //자동자 이름은 5자 이하, 쉼표로 구분
    // const carsArray = []
    const inputCarNames = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    );
    // carNamesArray.push(inputCarNames)
    const carNamesArray = inputCarNames.split(",");
    Console.print(carNamesArray);
  }

  async numberOfTries() {
    // 0부터 9까지 입력
    const inputTries = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    );

    if (inputTries < 0 || inputTries > 9) {
      throw new Error("[ERROR]");
    }
    // 4이상부터 전진
  }

  async displayOutcome() {
    // 우승사 1명 이상 가능, 쉼표로 구분
  }
}

export default App;
const app = new App();
app.play();
