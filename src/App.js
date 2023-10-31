import { MissionUtils } from "@woowacourse/mission-utils";
import Init from "./Init";

class App {
  async play() {
    const InitSetting = new Init();
    await InitSetting.start();

    this.getWinner(cars);
  }

  getWinner(cars) {
    const maxLength = Math.max(...cars.map((car) => car.forward.length));
    const longestForwardCars = cars.filter((car) => car.forward.length === maxLength);
    const longestCarNames = longestForwardCars.map((car) => car.carName).join(", ");

    MissionUtils.Console.print(`최종 우승자 : ${longestCarNames}`);
  }
}

export default App;
