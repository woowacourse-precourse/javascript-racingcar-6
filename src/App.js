import { Cars } from './game/Cars.js';
import { Race } from './game/Race.js';
import { getCarNames } from './input/CarNames.js';
import { getTry } from './input/Try.js';

class App {
  async play() {
    const carsNames = await getCarNames();
    const tryInput = await getTry();
    const cars = new Cars(carsNames);
    const race = new Race(cars, tryInput);

    race.start();

    race.end();
  }
}
export default App;
