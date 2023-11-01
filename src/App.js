import { getCarName, getMoveNumber } from "./getUserInput";
import { moveCars } from "./move";

class App {
  async play() {
    const names = getCarName();
    const moveNumber = getMoveNumber();

    const cars = getCarsObject(names);

    while (moveNumber--) {
      moveCars(names, cars);
    }
  }
}

export default App;
