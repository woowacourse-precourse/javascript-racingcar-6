class Referee {
  #winners = [];

  determineWinner(racingCars) {
    const cars = Object.values(racingCars);
    const maxMoveCount = Math.max(...cars.map((car) => car.getMoveCount()));
    this.#winners = cars.filter((car) => car.getMoveCount() === maxMoveCount);

    const winnerNames = this.#winners.map((car) => car.getName());

    return winnerNames;
  }
}
export default Referee;
