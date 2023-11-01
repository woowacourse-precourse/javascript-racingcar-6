import Car from './Car.js';

class App {
  async play() {
    const car = new Car();
    await car.forwardCarResult();
  }
}

export default App;
