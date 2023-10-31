function getMaxMovementCount(cars) {
  return cars.reduce((max, car) => Math.max(max, car.movement.length), 0);
}

function getWinners(cars, maxMovementCount) {
  return cars.filter((car) => car.movement.length === maxMovementCount);
}

class Referee {
  static isRaceValid(maxMovementCount) {
    return Boolean(maxMovementCount);
  }

  static checkWinners(cars) {
    const maxMovementCount = getMaxMovementCount(cars);
    if (this.isRaceValid(maxMovementCount)) {
      return getWinners(cars, maxMovementCount);
    }
    return null;
  }
}

export default Referee;
