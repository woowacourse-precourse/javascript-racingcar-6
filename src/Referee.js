function getMaxMovementCount(cars) {
  return cars.reduce((max, car) => Math.max(max, car.movement.length), 0);
}

function getWinners(cars, maxMovementCount) {
  return cars.filter((car) => car.movement.length === maxMovementCount);
}

class Referee {
  static checkWinners(cars) {
    const maxMovementCount = getMaxMovementCount(cars);
    const winners = getWinners(cars, maxMovementCount);
    return winners;
  }
}

export default Referee;
