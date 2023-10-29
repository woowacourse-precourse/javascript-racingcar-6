import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.cars = [];
  }
  async play() {
    const nameInput = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    this.cars = nameInput.split(",").map((name) => ({ name, position: 0 }));
    const tryCount = await Console.readLineAsync("시도할 회수는 몇회인가요?");
    Console.print(this.cars);
  }
}

export default App;
