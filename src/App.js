import { MissionUtils } from "@woowacourse/mission-utils";
import Init from "./Init";

class App {
  async play() {
    const InitSetting = new Init();
    await InitSetting.start();

    MissionUtils.Console.print("실행 결과");

    const tryNum = 1;

    for (let i = 0; i < tryNum; i += 1) {
      this.carMoveForward(cars);
    }

    this.getWinner(cars);
  }

  carMoveForward(cars) {
    cars.forEach((car) => {
      const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomNum >= 4) {
        car.forward = car.forward !== "" ? `${car.forward}-` : "-";
      }
      MissionUtils.Console.print(`${car.carName} : ${car.forward}`);
    });
    MissionUtils.Console.print("");
  }

  getWinner(cars) {
    const maxLength = Math.max(...cars.map((car) => car.forward.length));
    const longestForwardCars = cars.filter((car) => car.forward.length === maxLength);
    const longestCarNames = longestForwardCars.map((car) => car.carName).join(", ");

    MissionUtils.Console.print(`최종 우승자 : ${longestCarNames}`);
  }
}

export default App;
