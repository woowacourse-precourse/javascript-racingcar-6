import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  async inputCarName() {
    await MissionUtils.Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );

    return await MissionUtils.Console.readLineAsync("");
  }

  async play() {
    const CAR_NAME_LIST = await this.inputCarName();
    // MissionUtils.Console.print(CAR_NAME_LIST);
  }
}

const app = new App();
app.play();

export default App;
