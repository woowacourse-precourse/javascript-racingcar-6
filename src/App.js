import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.namingYourCar = "";
    this.userCarNameInArr = [];
    this.numberOfTries = 0;
    this.dash = "";
  }

  async play() {
    // MissionUtils.Console.print(
    //   "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    // );
    this.namingYourCar = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분"
    );
    this.userCarsName();
    this.numberOfTries =
      await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    this.executionResult();
  }

  userCarsName() {
    this.userCarNameInArr = this.namingYourCar.split(",");
    this.userCarNameInArr.map((i) => {
      if (i.length >= 6) {
        throw new Error("[ERROR] 5글자까지 입력 가능합니다.");
      }
    });
    MissionUtils.Console.print(this.userCarNameInArr.join());
  }

  executionResult() {
    if (isNaN(this.numberOfTries) === true) {
      throw new Error("[ERROR] 숫자만 입력 가능합니다.");
    }
    MissionUtils.Console.print(this.numberOfTries);
    MissionUtils.Console.print("실행 결과");
    for (let i = 0; i < this.numberOfTries; i++) {
      this.gameRepeat();
    }
  }

  gameRepeat() {
    let result = "";
    for (let i = 0; i < this.userCarNameInArr.length; i++) {
      result += `${this.userCarNameInArr[i]} : ${this.dashCount()}\n`;
    }
    MissionUtils.Console.print(result);
  }

  dashCount() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.dash += "-";
    }
    return this.dash;
  }
}

export default App;
