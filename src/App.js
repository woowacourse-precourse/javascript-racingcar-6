import { Console } from "@woowacourse/mission-utils";

const ERROR_HEADER = "[ERROR]";
class App {
  constructor() {
    this.racingCars = new Map();
    this.tryNumber;
  }

  async getRacingCars() {
    let inputValue = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    return inputValue.split(",");
  }

  async getTryNumber() {
    let input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    let number = parseInt(input);
    if (isNaN(number) || number < 1) {
      throw new Error(`${ERROR_HEADER} 1이상의 수를 입력하세요.`);
    }
    this.tryNumber = number;
  }

  initPlay() {}

  async play() {
    this.initPlay();
    const racingCars = await this.getRacingCars();
    await this.setRacingCars(racingCars);
    await this.getTryNumber();
  }
}

export default App;
