import Car from "./class/Car.js";
import Input from "./Input.js";
import Output from "./Output.js";
import Progress from "./Progress.js";
import Validation from "./Validation.js";

class App {
  cars;

  async play() {
    const carNamesInput = await Input.carNames();
    Validation.carNames(carNamesInput);
    this.cars = carNamesInput.split(",").map((carName) => new Car(carName));

    const tryCountInput = await Input.tryCount();
    Validation.tryCount(tryCountInput);

    Output.resultInformation();
    Progress.tryCount(tryCountInput, this.cars);

    Output.winner(Progress.winner(this.cars));
  }
}

export default App;
