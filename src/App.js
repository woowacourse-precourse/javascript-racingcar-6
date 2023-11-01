import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      const CAR_NAMES = await this.getCarNames();
      const TRY_COUNT = await this.getTryCount();
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  async getCarNames() {
    const CAR_NAMES_INPUT = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분): "
    );
    const CAR_NAMES = CAR_NAMES_INPUT.split(",");
    return CAR_NAMES;
  }

  async getTryCount() {
    const TRY_COUNT_INPUT = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요? "
    );
    const TRY_COUNT = parseInt(TRY_COUNT_INPUT);
    return TRY_COUNT;
  }
}

export default App;
