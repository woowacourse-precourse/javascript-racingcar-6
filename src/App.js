import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./message.js";


class App {
  async play() {
    Console.print(MESSAGE.GAME_START)
    Console.readLineAsync(MESSAGE.RACING_CAR_NAME)
  }
}
const app = new App(); 
app.play();
// export default App;
