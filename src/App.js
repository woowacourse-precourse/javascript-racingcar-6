import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const USER_INPUT = await Console.readLineAsync("");
    const CARS = USER_INPUT.split(",");

    if (CARS.length !== 3) {
      throw new Error("[Error] 경주할 자동차는 총 3대입니다.");
    }

    for (let car of CARS) {
      if (car.length > 5) {
        throw new Error("[Error] 각 자동차의 이름은 5글자 이하여야 합니다.");
      }
    }
  }
}

export default App;
