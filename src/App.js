import { Console } from "@woowacourse/mission-utils";
import { START } from "./constants/constants.js";

class App {
  async play() {
    const answer = await Console.readLineAsync(START);
  }
}

const app = new App();

app.play();
export default App;
