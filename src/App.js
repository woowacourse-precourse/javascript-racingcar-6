import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      const carNamesInput = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
      const carNames = carNamesInput.split(",");

      if (!this.areValidNames(carNames)) {
        throw new Error("[ERROR] 이름은 5자 이하만 가능하고, 쉼표(,)로 구분해야 합니다.");
      }

      const moveTimesInput = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?");
      const moveTimes = parseInt(moveTimesInput, 10);

      if (isNaN(moveTimes)) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }

      const carStatus = this.initializeCars(carNames);
      this.raceCars(carStatus, moveTimes);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }

  areValidNames(carNames) {
    return carNames.every((name) => name.length <= 5);
  }

}

export default App;
