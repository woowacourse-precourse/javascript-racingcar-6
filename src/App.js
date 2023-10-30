import Car from './car.js';
import Attempt from './attempt.js';

class App {
  async play() {
    const cars = await Car.createCarsFromInput();
    const numberOfAttempts = await Attempt.getNumberOfAttempts();

    for (let i = 0; i < numberOfAttempts; i++) {
      cars.forEach(car => car.move());
      cars.forEach(car => {
        console.log(`${car.name}: ${car.getDistanceString()}`);
      });
      console.log('\n');
    }
  }
}

export default App;
