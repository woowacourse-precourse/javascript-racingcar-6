import { Console, Random } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }
}

class App {
  async play() {
    const carNames = (
      await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      )
    ).split(",");
    const times = Number(
      await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n")
    );
    const cars = carNames.map((name) => new Car(name));
  }
}

export default App;
