import { getRaceCars, getRaceCount } from "./functions/getRaceInput.js";
import printRaceReult from "./functions/printRaceResult.js";

class App {
  async play() {
    const race_cars = await getRaceCars();
    const race_count = await getRaceCount();

    printRaceReult(race_cars, race_count);
  }
}

export default App;
