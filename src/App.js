import { MissionUtils } from "@woowacourse/mission-utils";
import ValidInput from './component/ValidInput';

class App {

  async play() {

    const validInput = new ValidInput();

    MissionUtils.Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const carNames = await MissionUtils.Console.readLineAsync();
    await validInput.validCarName(carNames);

    MissionUtils.Console.print("시도할 횟수는 몇 회인가요?");
    const round = parseInt(await MissionUtils.Console.readLineAsync());
    await validInput.validRound(round);
  }
}

export default App;
