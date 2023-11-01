import { 
  getCarName,
  getAttemptsNumber,
  printSteps,
  printWinner,
  carNameToArray,
 } from "./functions"
import Cars from "./Cars.js"

class App {
  async play() {

    const userInput = await getCarName();

    const carNameArray = carNameToArray(userInput);

    const cars = new Cars(carNameArray);

    const attemptsNumber = await getAttemptsNumber();

    printSteps(cars, attemptsNumber);

    printWinner(cars);
  }
}

export default App;
