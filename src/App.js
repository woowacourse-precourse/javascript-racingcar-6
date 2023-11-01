import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      const carNames = await this.enterCarNames();
    } catch (e) {
      throw new Error(`[Error] : ${e.message}`);
    }
  }

  async enterCarNames() {
    const inputCarNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const ret = inputCarNames.split(",");
    if (ret.every((carName) => carName.length <= 5)) {
      return ret;
    }
    throw new Error("자동차 이름을 5자 이하로 입력해주세요");
  }
}

const app = new App();
app.play();

export default App;
