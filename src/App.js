import inputRacingCar from "../src/components/inputRacingCar.js";
import inputTryNumber from "./components/inputTryNumber.js";
import isGo from "./components/IsGo.js";

class App {
  async play() {
    const CARS = await inputRacingCar();
    let TRYS = await inputTryNumber();
    while (TRYS--) {
      CARS.forEach((car) => {
        if (isGo) CARS.go++;
      });
    }
  }
}

export default App;
