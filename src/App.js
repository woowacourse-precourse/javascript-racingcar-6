import getCarName from "./getCarName.js";
import getCount from "./getCount.js";
import racing from "./racing.js";
import { printWinner } from "./print.js";
import findWinner from "./findWinner.js";
class App {
  async play() {
    const carName = await getCarName();
    const count = await getCount();
    const racingScore = racing(carName, count);
    printWinner(findWinner(racingScore));
  }
}

export default App;
