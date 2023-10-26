import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() { }
  
  async carNameInput() {
    MissionUtils.Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const carUserInput = await MissionUtils.Console.readLineAsync("");
    const carName = carUserInput.split(",")

    if (!carName || carName.length === 0 || carName.length > 5) {
      throw new Error("[ERROR] 이름이 잘못된 형식입니다.");
    }
  }

  async numberTimesInput() {
    MissionUtils.Console.print("시도할 횟수는 몇 회인가요?");
    const numberUserInput = await MissionUtils.Console.readLineAsync("");

    if (!/^\d+$/.test(numberUserInput)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  async playGame() {
    const carNames = this.carNameInput();
    const userNumber = await this.numberUserInput();
    const numberTimes = parseInt(userNumber);

    for (let i = 0; i < numberTimes; i++) {
      const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);

      for (const carName of carNames) {
        const action = randomValue >= 4 ? '-' : '';
        MissionUtils.Console.print(`${carName} : ${action}`);
      }
    }

    // 최종 우승자 판별 및 출력 (구현 예정)
  }

}

export default App;
