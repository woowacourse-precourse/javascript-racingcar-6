import Car from './Domain/Car.js';
import RacingGame from './Domain/RacingGame.js';
import View from './View/View.js';

class App {
  #view = new View();

  #game;

  async play() {
    await this.#setGameConfig();
    const { winner, raceResult } = this.#game.startRace();

    this.#view.printRaceResult({ winner, raceResult });
  }

  async #setGameConfig() {
    const { cars, round } = await this.#readGameConfig();

    this.#game = new RacingGame({ cars, round });
  }

  async #readGameConfig() {
    const carNames = await this.#view.readCarName();
    const cars = carNames.map((name) => new Car(name));
    const round = await this.#view.readRound();

    return { cars, round };
  }
}

export default App;
