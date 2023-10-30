import { MissionUtils } from "@woowacourse/mission-utils";
import { inputCarName } from "./InputCarName.js";
import { invaildCarName } from "./InvalidCarName.js";
class App {
  async play() {
    const carNames = await inputCarName();

    carNames.split(',').map(name => {
      if(invaildCarName(name)){
        // const car = new Car(name);
      }
    })
  }
}

const app = new App();
app.play();

export default App;
