import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import RacingGame from './RacingGame.js';
import InputReader from './View/InputReader.js';
import OutputView from './View/OutputView.js';
import { paramType } from './utils/paramType.js';
import { validate } from './utils/validate.js';
import Refree from './Refree.js';

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
    validate.carNames(carNames);
    const tryRound = await this.#inputReader.tryRount();
    validate.tryRound(tryRound);

    await this.ready(carNames, Number(tryRound));
  }

  async ready(
    carNames,
    tryRound,
    _0 = paramType(carNames, 'string'),
    _1 = paramType(tryRound, 'number')
  ) {
    const carArray = carNames.split(',').map((name) => new Car(name));
    const refree = new Refree(tryRound);
    this.#racingGame = new RacingGame(carArray, refree);

    this.racingStart();
  }

  racingStart() {
    this.#outputView.printGameStart();
    while (!this.#racingGame.isFinish()) {
      this.#racingGame.roundStart();
      const roundResult = this.#racingGame.getRoundResult();
      this.#outputView.printRoundResult(roundResult);
    }

    this.checkWinner();
  }

  checkWinner() {
    const winners = this.#racingGame.getWinners();

    this.#outputView.printWinners(winners);
  }
}
