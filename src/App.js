import {MissionUtils} from "@woowacourse/mission-utils";

class App {
  async play() {
    const NAMES = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const ROUND = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    MissionUtils.Console.print("실행 결과");
  }

}

export default App;
