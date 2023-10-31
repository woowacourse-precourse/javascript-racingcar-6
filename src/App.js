import getCarName from "./getCarName.js"
import getAttemptsNumber from "./getAttemptsNumber.js"
import printSteps from "./printSteps.js"
import Cars from "./Cars.js"
import printWinner from "./printWinner.js"

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
