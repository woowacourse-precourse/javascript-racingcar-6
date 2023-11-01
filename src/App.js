import RacingGame from './RacingGame.js';
import InputReader from './View/InputReader.js';
import OutputView from './View/OutputView.js';
import { paramType } from './utils/paramType.js';
import { validate } from './utils/validate.js';
import Refree from './Refree.js';
import RacingTrack from './RacingTrack.js';
import RandomNumberGenerator from './utils/RandomNumberGenerator.js';

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
    const racingTrack = new RacingTrack(carNames);
    const refree = new Refree(tryRound);
    const randomNumberGenerator = new RandomNumberGenerator();
    this.#racingGame = new RacingGame(
      racingTrack,
      refree,
      randomNumberGenerator
    );

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
