import { MissionUtils } from "@woowacourse/mission-utils";
// 예시: console.log(MissionUtils.Random.pickNumberInList([1, 2, 3]));

class App {
  async play() {}

  async getCarName() {
    const carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carNameList = carNames.split(",");
  }

  async getMoveCount() {
    const movecount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
  }
}

export default App;
