import CARSINPUT from "./racingcar/carsInput.js";
import TRYINPUT from "./racingcar/tryInput.js";
import RACE from "./racingcar/race.js";

class App {
  async play() {
    const USERINPUTCAR = await CARSINPUT();
    const USERINPUTTRY = await TRYINPUT();
    RACE(USERINPUTCAR, USERINPUTTRY);
  }
}

export default App;
