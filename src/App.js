import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const enterCarName = MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n"
    );

    const carName = enterCarName.split(",");

    function verifyNameLength() {
      if (carName.length > 5) {
        throw new Error(
          "[ERROR] 입력한 이름이 5자를 초과하였습니다. 게임을 다시 시작해주세요."
        );
      }
    }
  }
}

export default App;
