import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.gameStatus = true;
  }
  async play() {
    while (this.gameStatus) {
      // 1. 이름 입력하세요 콘솔
      const nameOfCars = await MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
      );
      let cars = this.checkNameOfCarsLength(nameOfCars);

      // 2. 시도할 횟수는 몇 회인가요 콘솔
      const tryNumber = await MissionUtils.Console.readLineAsync(
        "시도할 횟수는 몇 회인가요?"
      );
    }
  }
  // + 이름 5자 이하. 쉼표로 구분.
  checkNameOfCarsLength(nameOfCars) {
    const cars = nameOfCars.split(",");
    for (let i = 0; i < cars.length; i++) {
      const carName = cars[i].trim();
      if (carName.length > 5) {
        throw Error("[ERROR] 이름은 다섯자 이하만 가능합니다.");
      }
    }
    return cars;
  }
}

export default App;
