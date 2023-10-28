import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    const carName = await this.getCarInput();
  }

  async getCarInput() {
    const cars = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분"
    );

    return cars.split(",");
  }
}

export default App;
