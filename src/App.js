import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const carNames = await this.inputCarNames();
    this.checkCarNames(carNames);
    const countCars = carNames.length;
    const count = await this.inputCount();
  }

  async inputCarNames() {
    const carInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    let carNames = [];

    if (typeof carInput === "string") {
      carNames = carInput.split(",");
    } else {
      throw new Error("[ERROR] : 문자만 입력해 주세요.");
    }

    return carNames;
  }

  checkCarNames(carNames) {
    carNames.forEach((car) => {
      if (car.length > 5) {
        throw new Error("[ERROR] : 자동차 이름은 5자 이하만 입력 가능합니다.");
      }
    });
    return null;
  }

  async inputCount() {
    let count = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    count = Number(count);

    if (Object.is(count, NaN)) {
      throw new Error("[ERROR] : 숫자를 입력해주세요.");
    }

    return count;
  }
}

export default App;
