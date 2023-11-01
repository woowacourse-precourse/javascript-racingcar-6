import { getCarName, getMoveNumber, getCarsObject } from "./getUserInput";
import { moveCars } from "./move";

class App {
  async play() {
    const names = await getCarName();
    const moveNumber = await getMoveNumber();

    const cars = getCarsObject(names);

    while (moveNumber--) {
      moveCars(names, cars);
    }
  }
}

export default App;
