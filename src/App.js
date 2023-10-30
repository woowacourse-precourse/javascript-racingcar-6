import Screen from './Screen';
import Car from './Car';

class App {
  async play() {
    const names = await Screen.inputNames();
    const cars = names.map((name) => new Car(name));

    const count = await Screen.inputCount();
  }
}

export default App;
