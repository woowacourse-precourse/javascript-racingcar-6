import CarRace from "./CarRace";

class App {
  async play() {
    const carRace = new CarRace();

    await carRace.handleRace();
  }
}

export default App;
