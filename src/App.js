import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    await this.displayResults();
  }

  // async inputCarNames() {
  //   const carNamesInput = await Console.readLineAsync(
  //     "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
  //   );

  //   carNamesInput
  //     .trim()
  //     .split(",")
  //     .map((carName) => {
  //       if (carName.length > 5 || carName.length <= 0) {
  //         throw new Error("[ERROR]");
  //       }
  //     });
  // }

  async displayResults() {
    // const RACECAR = await this.inputCarNames();
    const carName = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const CARS = carName.trim().split(",");

    CARS.map((el) => {
      if (el.length > 5 || el.length <= 0) {
        throw new Error("[ERROR]");
      }
    });
    const ROTATION = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");

    Console.print("실행 결과");
    for (let i = 0; i < ROTATION; i++) {
      CARS.map((car) => {
        const score = Random.pickNumberInRange(0, 9);
        //
        if (score <= 4) {
          // return Console.print(`${el} : ${result}`);
          return Console.print(`${car} : -`);
        } else if (score > 4) {
          Console.print(`${car} : ${score}`);
          // totalScore[el] = (totalScore[el] || 0) + result;
        } else {
          throw new Error("[ERROR]");
        }
      });
    }
  }
}

export default App;
const app = new App();
app.play();
