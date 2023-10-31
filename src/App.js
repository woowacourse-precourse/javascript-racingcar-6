import getCarName from "./getCarName.js"
import getAttemptsNumber from "./getAttemptsNumber.js";

class App {
  async play() {

    const carNameArray = await getCarName();

    const attemptsNumber = await getAttemptsNumber();

  }
}

export default App;
