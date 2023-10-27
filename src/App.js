import { getRaceCars, getRaceCount } from "./functions/getRaceInput.js";

class App {
  async play() {
    const race_cars = await getRaceCars();
    const race_count = await getRaceCount();
  }
}

export default App;
