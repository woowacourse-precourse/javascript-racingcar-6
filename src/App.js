import Car from './Car.js';
import RacingGame from './RacingGame.js';
import InputReader from './View/InputReader.js';
import OutputView from './View/OutputView.js';
import { Console } from '@woowacourse/mission-utils';

export default class App {
  #inputReader;
  #outputView;
  #racingGame;

  constructor() {
    this.#inputReader = new InputReader();
    this.#outputView = new OutputView();
    this.#racingGame = null;
  }

  async play() {
    const carNames = await this.#inputReader.carNames();
    const tryRound = await this.#inputReader.tryRount();

    await this.ready(carNames, tryRound);
  }

  async ready(carNames, tryRound) {
    if (carNames.split(',').some((carName) => carName.length > 5)) {
      throw new Error('[ERROR] 이름은 5자 이하로 적어주세요 !');
    }
    const carArray = carNames.split(',').map((name) => new Car(name));

    this.#racingGame = new RacingGame(carArray, tryRound);

    await this.racingStart();
  }

  async racingStart() {
    while (!this.#racingGame.isFinish()) {
      this.#racingGame.roundStart();
      const roundResult = this.#racingGame.getRoundResult();
      this.#outputView.printRoundResult(roundResult);
    }
  }
}
