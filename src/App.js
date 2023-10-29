import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  async inputCarName() {
    await MissionUtils.Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );

    const INPUT_CAR_NAME = await MissionUtils.Console.readLineAsync("");

    const CARS_ARRAY = INPUT_CAR_NAME.split(",");

    CARS_ARRAY.forEach((name) => {
      if (name.length < 1 || name.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5글자 이하로 입력해야 합니다.");
      }
    });

    return await CARS_ARRAY;
  }

  async play() {
    await this.inputCarName();
  }
}

const app = new App();
app.play();

export default App;
