class RaceManagerModel {
  constructor(carModels) {
    this.carModels = carModels;
    this.moveCount = 0;
  }

  setMoveCount(moveCount) {
    this.moveCount = moveCount;
  }

  race() {
    this.carModels.forEach(carModel => carModel.move());
  }

  calcultateWinner() {
    const maxPosition = Math.max(
      ...this.carModels.map(carModel => carModel.position.length),
    );

    const winners = this.carModels.filter(
      carModel => carModel.position.length === maxPosition,
    );

    return winners.map(winner => winner.carName).join(', ');
  }
}

export default RaceManagerModel;
