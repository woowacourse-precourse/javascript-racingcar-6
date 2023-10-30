import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    this.carParticipants();
  }

  async carParticipants() {
    //! 자동자 이름은 5자 이하, 쉼표로 구분

    const inputCarNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carNamesArray = inputCarNames.split(",");
    // const num = this.numberOfTries();
    const inputTries = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    );

    if (inputTries < 0 || inputTries > 9) {
      throw new Error("[ERROR]");
    }

    let totalScore = {};

    Console.print("실행 결과");
    for (let i = 0; i < inputTries; i++) {
      carNamesArray.map((el) => {
        const result = Random.pickNumberInRange(0, 9);
        if (el.length <= 4 && result <= 4) {
          // return Console.print(`${el} : ${result}`);
          return Console.print(`${el} : -`);
        } else if (el.length <= 4 && result > 4) {
          Console.print(`${el} : ${result}`);
          totalScore[el] = (totalScore[el] || 0) + result;
        } else {
          throw new Error("[ERROR]");
        }
      });
    }
    for (const carName in totalScore) {
      if (totalScore[carName] > 9) {
        Console.print(`${carName} : ${totalScore[carName]}`);
      }
    }
  }

  async displayFinalScore(num) {
    // 0부터 9까지 입력
    // const inputTries = await Console.readLineAsync(
    //   "시도할 횟수는 몇 회인가요?"
    // );
    // return inputTries;
    // 4이상부터 전진
  }

  async displayWinnerMessage() {
    // 우승사 1명 이상 가능, 쉼표로 구분
  }
}

export default App;
const app = new App();
app.play();
