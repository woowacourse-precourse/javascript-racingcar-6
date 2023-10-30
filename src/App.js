import { MissionUtils, Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.cars = [];
    this.gameCount = 0;
  }

  addCars(carNames) {
    this.cars = carNames.split(",");
    this.cars = this.cars.map((name) => ({ name, score: 0 }));
  }

  checkNumber(input) {
    const numericRegex = /^[0-9]+$/;
    if (numericRegex.test(input) === false)
      throw new Error("[Error]: invalid number");
  }

  rollDice() {
    return Random.pickNumberInRange(0, 9);
  }

  async play() {
    try {
      const inputCarNames = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
      );
      this.addCars(inputCarNames);

      const inputNumber = await Console.readLineAsync(
        "시도할 횟수는 몇 회인가요?\n"
      );
      this.checkNumber(inputNumber);
      this.gameCount = inputNumber;
    } catch (error) {
      console.log(error);
    }
  }
}

export default App;
