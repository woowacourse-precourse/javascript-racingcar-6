import { Console } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.racingCars;
  }

  async getRacingCars() {
    let inputValue = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    this.racingCars = inputValue.split(",");
  }

  initPlay() {}

  async play() {
    this.initPlay();
    this.getRacingCars();
  }
}

export default App;
