class Calculate {
  static calculateMaxMove(carsStatus) {
    return Math.max(...carsStatus.map((carStatus) => carStatus.move));
  }

  static calculateWinner(carsStatus) {
    return carsStatus
      .filter((carStatus) => carStatus.move === Calculate.calculateMaxMove(carsStatus))
      .map((carStatus) => carStatus.name);
  }
}

export default Calculate;
