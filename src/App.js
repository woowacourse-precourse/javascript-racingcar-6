import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const getMemberData = async () => {
      const memberInput = await MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
      );
      const members = memberInput.split(",");

      return members;
    };

    const memberData = await getMemberData();
  }
}

export default App;
