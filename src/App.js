import inputRacingCar from "../src/components/inputRacingCar.js";
import inputTryNumber from "./components/inputTryNumber.js";
import isGo from "./components/IsGo.js";

class App {
  async play() {
    data = {
      car: "",
      go: 0,
    };
    const CARS = inputRacingCar();
    const TRYS = inputTryNumber();
    let goal = false;

    while (!goal) {
      CARS.forEach((car) => {
        if (isGo) {
        }
      });
    }
  }
}

export default App;
