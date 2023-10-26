import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async readUserRaceCarName() {
    try {
      const raceCarName = await MissionUtils.Console.readLineAsync(
        `${"경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"}\n`,
      );
      const validNames = raceCarName.split(",").map((name) => name.trim());
      for (const name of validNames) {
        if (name.length > 5) {
          throw new Error();
        }
      }
      this.userTryCount();
    } catch (e) {
      throw new Error("[ERROR] 잘못된 문자 형식입니다.");
    }
  }

  async userTryCount() {
    try {
      const tryCount = await MissionUtils.Console.readLineAsync(
        `${"시도할 횟수는 몇 회인가요?"}\n`,
      );
    } catch (e) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  async play() {
    await this.readUserRaceCarName();
  }
}

export default App;
