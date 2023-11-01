import Car from "./Car.js";
import Input from "./Input.js";
import Validation from "./Validation.js";

class App {
  cars;

  async play() {
    const carNamesInput = await Input.carNames();
    Validation.carNames(carNamesInput);

    this.cars = carNamesInput.split(",").map((carName) => new Car(carName));
  }
}

export default App;
