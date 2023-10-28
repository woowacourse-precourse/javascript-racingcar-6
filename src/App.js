import RacingGame from './RacingGame';
import InputReader from './View/InputReader';

export default class App {
  #inputReader;
  #racingGame;

  constructor() {
    this.#inputReader = new InputReader();
    this.#racingGame = null;
  }

  async play() {
    const carNames = await this.#inputReader.carNames();
    const tryRound = await this.#inputReader.tryRount();
    const carArray = carNames.split(',').map((name) => new Car(name));
    this.#racingGame = new RacingGame(carArray, tryRound);
  }
}
