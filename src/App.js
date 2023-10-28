import { Console } from "@woowacourse/mission-utils";

class App {
  async createCarObjectFromInput() {
    const carObject = {};

    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carInputString = await Console.readLineAsync("");
    const carNames = carInputString.split(",");

    carNames.forEach((name) => {
      carObject[name] = 0;
    });

    return carObject;
  }

  async askForRacingCount() {
    Console.print("시도할 횟수는 몇 회인가요?");
    const racingCount = await Console.readLineAsync("");

    return racingCount;
  }

  play() {
    this.createCarObjectFromInput();
  }
}

export default App;
