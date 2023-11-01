class Referee {
  #winners = [];

  determineWinners(racingCars) {
    const maxMoveCount = Math.max(
      ...racingCars.map((car) => car.getMoveCount())
    );
    this.#winners = racingCars.filter(
      (car) => car.getMoveCount() === maxMoveCount
    );

    const winnerNames = this.#winners.map((car) => car.getName());

    return winnerNames;
  }
}
export default Referee;
