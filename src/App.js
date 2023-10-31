import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const carName = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    const carArray = carName.split(",");
    const carAndDistance = {};

    carArray.forEach((car) => {
      carAndDistance[car] = 0;
    });
  }
}

export default App;
