import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const nameInput = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const tryNum = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const names = nameInput.split(',')
  }
}

export default App;
