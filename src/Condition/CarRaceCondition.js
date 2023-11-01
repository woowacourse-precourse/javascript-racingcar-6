class CarRaceCondition {
  #racecarname;
  #forward = 0;

  constructor(raceCarName) {
    this.#racecarname = raceCarName;
  }
  moveForward() {
    this.#forward += 1;
  }

  getRaceCarName() {
    return this.#racecarname;
  }

  getRaceCarForwardDistance() {
    return this.#forward;
  }
}

export default CarRaceCondition;
