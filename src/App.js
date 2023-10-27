import CarRace from "../src/CarRace.js";

class App {
  async play() {
    const carRace = new CarRace();

    await carRace.handleRace();
  }
}

export default App;
