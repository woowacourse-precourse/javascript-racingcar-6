import { MissionUtils } from "@woowacourse/mission-utils";
import { randomNumber } from "./randomNumber.js";

class App {
  async play() {
    MissionUtils.Console.print(randomNumber());
  }
}
const app = new App();
app.play();
export default App;
