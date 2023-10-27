class RacingGameController {
  #inputView;
  #outputView;
  #racingGame;
  #factory;

  constructor(inputView, outputView, game, factory) {
    this.#inputView = inputView;
    this.#outputView = outputView;
    this.#racingGame = game;
    this.#factory = factory;
  }

  async initiate() {
    const { carNames, rounds } = await this.#getUserInputs();
    this.#setupCarsFromNames(carNames);
    this.#executeRacingRounds(rounds);
    this.#racingGame.concludeGame();
    this.#displayWinners();
  }

  async #getUserInputs() {
    const carNames = await this.#inputView.readNamesInput();
    const rounds = await this.#inputView.readRoundsNumberInput();
    return { carNames, rounds };
  }

  #setupCarsFromNames(names) {
    const cars = names.map((item) => this.#factory.createRacingCar(item));
    this.#racingGame.setCars(cars);
  }

  #executeRacingRounds(roundsNumber) {
    this.#outputView.printResultHeader();
    for (let i = 0; i < roundsNumber; i += 1) {
      this.#racingGame.moveAllCars();
      const roundResult = this.#racingGame.getAllCarsMovementResult();
      this.#outputView.printResult(roundResult);
    }
  }
  #displayWinners() {
    const winners = this.#racingGame.getWinners();
    this.#outputView.printWinners(winners);
  }
}

export default RacingGameController;
