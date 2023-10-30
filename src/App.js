import Screen from './Screen';
import Car from './Car';

class App {
  async play() {
    const names = Screen.inputNames();
    const cars = names.map((name) => new Car(name));

    const count = Screen.inputCount();
  }
}

export default App;
