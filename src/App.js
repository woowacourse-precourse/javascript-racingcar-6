import { MissionUtils } from "@woowacourse/mission-utils";
import { inputCarName } from "./InputCarName.js";
import { invaildCarName } from "./InvalidCarName.js";
import Car from "./Car.js";
class App {
  async play() {
    const carNames = await inputCarName();

    carNames.split(',').map(name => {
      if(invaildCarName(name)){
        const car = new Car(name);
        // MissionUtils.Console.print(car.name)
      }
    })
  }
}

const app = new App();
app.play();

export default App;
