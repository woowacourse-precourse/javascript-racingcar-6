class GameResult {
  #carLog;

  constructor() {
    this.#carLog = new Map();
  }

  getForwardResult(carPosition) {
    carPosition.forEach((value, carName) => {
      this.updateCarLog(carPosition, carName, value);
    });
    return this.#carLog;
  }

  updateCarLog(carPosition, carName, value) {
    switch (true) {
      case value > 0:
        carPosition.set(carName, value - 1);
        let log = this.#carLog.get(carName) || 0;
        log += 1;
        this.#carLog.set(carName, log);
        break;
      default:
        this.#carLog.set(carName, this.#carLog.get(carName) || 0);
    }
  }

  getWinner(carLog) {
    const values = Array.from(carLog.values());
    const maxValue = Math.max(...values);
    const winners = [];

    carLog.forEach((value, carName) => {
      if (value === maxValue) {
        winners.push(carName);
      }
    });
    return winners.join(', ');
  }
}

export default GameResult;
