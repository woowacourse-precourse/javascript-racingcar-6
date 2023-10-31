import Car from './Car.js';

class App {
  #car;
  constructor() {
    this.#car = new Car();
  }

  async play() {
    return this.#car.inputRacers();
  }
}

export default App;
