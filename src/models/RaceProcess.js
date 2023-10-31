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

  getWinner(forwards) {
    const maxValue = Math.max(...forwards.values());
    const winners = [];

    forwards.forEach((value, carName) => {
      if (value === maxValue) {
        winners.push(carName);
      }
    });
    return winners.join(', ');
  }
}

export default RaceProcess;
