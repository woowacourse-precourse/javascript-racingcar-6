import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.namingYourCar = "";
    this.numberOfTries = 0;
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
    const userCarNameInArr = this.namingYourCar.split(",");
    userCarNameInArr.map((i) => {
      if (i.length >= 6) {
        throw new Error("[ERROR] 5글자까지 입력 가능합니다.");
      }
    });
    MissionUtils.Console.print(userCarNameInArr.join());
  }

  executionResult() {
    if (isNaN(this.numberOfTries) === true) {
      throw new Error("[ERROR] 숫자만 입력 가능합니다.");
    }
    MissionUtils.Console.print(this.numberOfTries);
    MissionUtils.Console.print("실행 결과");
    for (let i = 0; i < this.numberOfTries; i++) {
      gameRepeat();
    }
  }
  gameRepeat() {}
}

export default App;
