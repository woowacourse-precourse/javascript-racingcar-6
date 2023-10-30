import { Car } from './features/car/Car.js';

class App {
  async play() {
    const car = new Car();

    const carName = await car.getName();
  }
}
export default App;
