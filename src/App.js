import Race from './PlayRacing.js';
import Car from './model/Car.js';
import { getCarNames, getGameCount } from './Input.js';

class App {
  async play() {
    const carNames = await getCarNames();
    const gameCount = await getGameCount();

    const cars = carNames.map((name) => new Car(name));
    const race = new Race(cars, gameCount);
    race.start();
  }
}

export default App;
