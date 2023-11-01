import { getCarName, getMoveNumber } from "./getUserInput";

class App {
  async play() {
    const names = getCarName();
    const moveNumber = getMoveNumber();
  }
}

export default App;
