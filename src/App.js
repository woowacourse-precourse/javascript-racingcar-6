import { MissionUtils } from "@woowacourse/mission-utils";
import { carGenerate } from "./car.js";

class App {
  async start() {
    const carsList = await carGenerate();
    console.log(carsList);
    carGenerate();
  }

  async play() {
    this.start();
  }
}

export default App;
