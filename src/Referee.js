class Referee {
  static checkWinners(cars) {
    const maxValue = Math.max(...cars.map((car) => car.movement.length));
    const winners = cars.filter((car) => car.movement.length === maxValue);
    return winners;
  }
}

export default Referee;
