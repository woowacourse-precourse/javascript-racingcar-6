import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  // 자동차 이름 입력
  constructor() {
    MissionUtils.Console.print(
      "경주 할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    this.CAR_NAMES = [];
  }

  addCar(names) {
    const carNames = names.split(",");
    for (const carName of carNames) {
      if (carName.trim().length > 5) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
      this.CAR_NAMES.push({ name: carName, position: 0 });
    }
  }
}

const app = new App();
app.play();

export default App;
