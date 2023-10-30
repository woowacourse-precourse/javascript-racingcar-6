import Screen from './Screen';
import Car from './Car';

class App {
  async play() {
    const names = await Screen.inputNames();
    const cars = names.map((name) => new Car(name));

    let count = await Screen.inputCount();

    Screen.printResultMessage();

    while (count > 0) {
      cars.forEach((car) => {
        car.moveForward();
        Screen.printResult(car);
      });

      Screen.printNewline();

      count -= 1;
    }
  }
}

export default App;
