class GameModel {
  constructor(rounds, cars) {
    this.rounds = rounds;
    this.curRound = 1;
    this.cars = cars;
  }

  playRound() {
    this.cars.forEach((car) => {
      car.move();
    });
    this.curRound++;
  }

  isGameOver() {
    return this.curRound === this.rounds;
  }

  getWinners() {}
}

export default GameModel;
