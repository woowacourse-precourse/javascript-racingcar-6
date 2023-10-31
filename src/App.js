import { getRaceCars, getRaceCount } from './functions/getRaceInput.js';
import { printRaceResult } from './functions/printRaceResult.js';
import printRaceWinner from './functions/printRaceWinner.js';

class App {
  async play() {
    const race_cars = await getRaceCars();
    const race_count = await getRaceCount();

    const cars_result = printRaceResult(race_cars, race_count);
    printRaceWinner(cars_result);
  }
}

export default App;
