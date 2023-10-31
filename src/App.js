import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const carList = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    this.validateCarList(carList);
    const gameCount = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    this.validateGameCount(gameCount)
  }
  validateCarList(carList) {
    if (carList.length === 0) {
      throw new Error(
        "[ERROR] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능합니다."
      );
    }

    const carNames = carList.split(",").map((name) => name.trim());

    if (carNames.some((name) => name.length > 5)) {
      throw new Error("[ERROR] 이름은 5자 이하만 가능합니다.");
    }
  }
  validateGameCount(gameCount) {
    if (isNaN(gameCount)){
      throw new Error("[ERROR] 입력받은 횟수가 숫자가 아닙니다.")
    }
  }
}

const app = new App();
app.play();
export default App;
