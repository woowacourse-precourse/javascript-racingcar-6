import { MissionUtils } from "@woowacourse/mission-utils";
import { validCarName } from './component/ValidInput';

class App {

  async play() {
    MissionUtils.Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const carNames = await MissionUtils.Console.readLineAsync();
    validCarName(carNames);
  }
}

export default App;
