import Car from './Domain/Car.js';
import RacingGame from './Domain/RacingGame.js';
import View from './View/View.js';

class App {
  #view = new View();

  #game;

  async play() {
    const carNames = await this.#view.readCarName();
    const cars = carNames.map((name) => new Car(name));

    const round = await this.#view.readRound();

    this.#game = new RacingGame({ cars, round });
  }
}

const app = new App();
app.play();

export default App;
