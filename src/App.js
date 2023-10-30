import { Random, Console } from "@woowacourse/mission-utils";

class App {
  carData = "";
  inputArray = [];
  movementCount = 0;
  advanceCount = [];

  async start() {
    return Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
  }

  splitCarName() {
    this.inputArray = this.carData.split(",");
  }

  validate() {
    if (this.inputArray.map((data) => data.length > 5).includes(true)) {
      throw new Error("[ERROR] 잘못된 값을 입력하였습니다.");
    }
  }

  countAttempt() {
    return Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  }

  getRandomValue(car) {
    const number = Random.pickNumberInRange(0, 9);
    let dashString = "";

    number >= 4 &&
      this.advanceCount.filter(
        (data) => data.carName === car.carName && car.advance++
      );

    for (let i = 0; i < car.advance; i++) dashString += "-";

    Console.print(car.carName + " : " + dashString);
  }

  async play() {
    this.carData = await this.start();

    this.splitCarName();
    this.validate();

    this.movementCount = await this.countAttempt();

    this.inputArray.map((name) =>
      this.advanceCount.push({ carName: name, advance: 0 })
    );

    Console.print("실행 결과");
    while (
      !this.advanceCount
        .map((data) => data.advance === Number(this.movementCount))
        .includes(true)
    ) {
      this.advanceCount.map((advance) => this.getRandomValue(advance));
      Console.print("\n");
    }
  }
}

export default App;
