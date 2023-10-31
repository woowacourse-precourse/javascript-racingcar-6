class RaceProcess {
  #records;

  constructor() {
    this.#records = new Map();
  }

  getForwardProcess(carPosition) {
    carPosition.forEach((value, carName) => {
      this.updateRecords(carPosition, carName, value);
    });
    return this.#records;
  }

  updateRecords(carPosition, carName, value) {
    switch (true) {
      case value > 0:
        carPosition.set(carName, value - 1);
        let log = this.#records.get(carName) || 0;
        log += 1;
        this.#records.set(carName, log);
        break;
      default:
        this.#records.set(carName, this.#records.get(carName) || 0);
    }
  }
}

export default RaceProcess;
