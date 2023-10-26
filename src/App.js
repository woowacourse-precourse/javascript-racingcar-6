import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async getInput(message) {
    try {
      const input = await MissionUtils.Console.readLineAsync(message);
      return input;
    } catch (error) {
      throw "[ERROR] 입력을 받는 중 실패하였습니다.";
    }
  }

  async play() {
    const carStrList = await this.getInput(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carList = carStrList.split(",");
  }
}

export default App;
