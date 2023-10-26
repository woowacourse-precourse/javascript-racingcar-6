import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    this.carParticipants();
  }

  async carParticipants() {
    //! 자동자 이름은 5자 이하, 쉼표로 구분
    // const carsArray = []
    // carNamesArray.push(inputCarNames)
    // for (const name of carNamesArray) {
    //   if (name.length <= 4) {
    //     return Console.print(`${name} : `);
    //   } else {
    //     throw new Error("[ERROR]");
    //   }
    // }
    const inputCarNames = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    );
    const carNamesArray = inputCarNames.split(",");

    carNamesArray.map((el) => {
      const result = Random.pickNumberInRange(0, 9);

      if (el.length <= 4) {
        return Console.print(`${el} : ${result}`);
      } else {
        throw new Error("[ERROR]");
      }
    });
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
