import { Random, Console } from "@woowacourse/mission-utils";

class App {
  carData = "";
  inputArray = [];

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

  async play() {
    this.carData = await this.start();

    this.splitCarName();
    this.validate();
  }
}

export default App;
