import { MissionUtils } from "@woowacourse/mission-utils";
import { inputCarName } from "./InputCarName.js";
import { invaildCarName } from "./InvalidCarName.js";
import Car from "./Car.js";
import { invalidCount } from "./InvalidCount.js";
import { inputCount } from "./InputCount.js";
class App {
  async play() {
    const carNames = await inputCarName();

    const car = carNames.split(',').map(name => {
      if(invaildCarName(name)){
        return new Car(name, 0);
      }
    })

    // MissionUtils.Console.print(car);

    const count = await inputCount();
    if(invalidCount(count)){
      MissionUtils.Console.print(count);
    }
  }
}

const app = new App();
app.play();

export default App;
