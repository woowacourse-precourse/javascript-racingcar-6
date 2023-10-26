import CreateCar from './CreateCar.js';

class App {
  async play() {
    const car = await CreateCar();
  }
}

export default App;
