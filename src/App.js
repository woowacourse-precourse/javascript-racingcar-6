import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    const carName = await this.getCarInput();

    if (carName.every((car) => car.length <= 5)) {
      throw new Error("자동차 이름은 5자 이하만 가능합니다.");
    }
  }

  async getCarInput() {
    const cars = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분"
    );

    return cars.split(",");
  }
}

export default App;
