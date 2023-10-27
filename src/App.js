import Print from "./Print.js";
import Car from "./Car.js";

class App {
  async play() {
    const cars = await Print.getCars();
    const tryCount = await Print.getTryCount();

    let carInstanceArray;
    carInstanceArray = cars.map((carName) => new Car(carName));
  }
}

export default App;
