import { Random, Console } from "@woowacourse/mission-utils";

class App {
  cars;
  async getCarName() {
    const carInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    this.cars = carInput.split(",");
    if (this.cars.some((car) => car.length > 5)) {
      //cars배열안에 5글자가 넘는 이름이 있는지 검사
      throw new Error("[ERROR] 자동차의 이름은 5자 이하여야 합니다.");
    }
    if (new Set(this.cars).size !== this.cars.length) {
      // 중복된 이름이 있는지 검사
      throw new Error("[ERROR] 중복된 이름이 있습니다.");
    }
  }

  async play() {}
}

export default App;
