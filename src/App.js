import CarRace from "./CarRace";

class App {
  #carRace;

  constructor() {
    this.#carRace = new CarRace();
  }

  async play() {
    await this.#carRace.handleCar();

    await this.#carRace.handleTryNumber();

    this.#carRace.handleRaceResult();
  }
}

export default App;
