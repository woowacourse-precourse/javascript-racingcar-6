import { getCarName,
  getAttemptsNumber,
  printSteps,
  printWinner
 } from "./functions"
import Cars from "./Cars.js"

class App {
  async play() {

    const carNameArray = await getCarName();

    const cars = new Cars(carNameArray);

    const attemptsNumber = await getAttemptsNumber();

    printSteps(cars, attemptsNumber);

    printWinner(cars);
  }
}

export default App;
