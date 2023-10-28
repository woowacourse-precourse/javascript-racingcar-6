import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class App {
  
  constructor() {
    this.cars = [];
  }

  async inputCarNames() {
    return await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n")
  }

  makeCarArray(names) {
    names.split(",").forEach((name) => {
      this.cars.push(new Car(name));
    })
    
    MissionUtils.Console.print(this.cars);
  }

  async play() {
    const names = await this.inputCarNames();

    this.makeCarArray(names)
  }
}

export default App;
