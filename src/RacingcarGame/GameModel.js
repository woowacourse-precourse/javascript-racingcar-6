class GameModel {
  constructor() {
    this.CAR_NAME = [];
    this.ATTEMPTS = 0;
  }

  setCarName(carname) {
    this.CAR_NAME = carname;
  }

  setAttempts(attempts) {
    this.ATTEMPTS = parseInt(attempts);
  }
}

export default GameModel;
