import Car from './car.js';

class App {
  async play() {
    Car.createCarsFromInput((cars) => {});
  }
}

export default App;
