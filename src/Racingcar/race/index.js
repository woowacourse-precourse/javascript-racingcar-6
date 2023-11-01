class Race {
  static getWinners(carData) {
    const maxPosition = Math.max(...carData.map((car) => car.position));
    const winners = carData.filter((car) => car.position === maxPosition).map((car) => car.name);
    return winners;
  }
}

export default Race;
