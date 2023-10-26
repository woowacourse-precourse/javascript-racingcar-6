import Print from "./Print.js";
import Car from "./Car.js";

class App {
  async play() {
    const cars = await Print.getCars();
    const tryCount = await Print.getTryCount();

    cars.forEach((carName) => {
      const car = new Car(carName, tryCount);
    });
  }
}

export default App;
