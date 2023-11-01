function getBestMovementRecord(cars) {
  return cars.reduce((max, car) => Math.max(max, car.movement.length), 0);
}

function getWinners(cars, bestRecord) {
  return cars.filter((car) => car.movement.length === bestRecord);
}

class Referee {
  static isRaceValid(bestRecord) {
    return Boolean(bestRecord);
  }

  static decideWinners(cars) {
    const bestRecord = getBestMovementRecord(cars);
    if (this.isRaceValid(bestRecord)) {
      return getWinners(cars, bestRecord);
    }
    return null;
  }
}

export default Referee;
