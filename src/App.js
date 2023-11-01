import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.namingYourCar = "";
  }

  async play() {
    // MissionUtils.Console.print(
    //   "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    // );
    this.namingYourCar = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분"
    );
    this.userCarsName();
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
}

export default App;
