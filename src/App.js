import Car from './car.js';
import Attempt from './attempt.js';

class App {
  async play() {
    const cars = await Car.createCarsFromInput(); 
    const numberOfAttempts = await Attempt.getNumberOfAttempts();
  }
}

export default App;
