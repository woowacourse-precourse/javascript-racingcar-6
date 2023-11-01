import getCarName from "./functions/getCarName.js"
import carNameToArray from "./functions/carNameToArray.js"
import getAttemptsNumber from "./functions/getAttemptsNumber.js"
import isNumberValid from "./functions/isNumberVaild.js"
import printSteps from "./functions/printSteps.js"
import printWinner from "./functions/printWinner.js"
import Cars from "./models/Cars.js"

class App {
  async play() {

    const userInput = await getCarName();

    const carNameArray = carNameToArray(userInput);

    const cars = new Cars(carNameArray);

    const attemptsNumber = await getAttemptsNumber();
    
    isNumberValid(attemptsNumber);

    printSteps(cars, attemptsNumber);

    printWinner(cars);
  }
}

export default App;
