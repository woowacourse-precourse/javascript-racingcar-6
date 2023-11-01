import { RANDOM_NUMBER_RANGE } from './constants/numberRange.js';
import { ERROR_MESSAGE } from './constants/errorMessage.js';
import { paramType } from './utils/paramType.js';
import Refree from './Refree.js';
import RacingTrack from './RacingTrack.js';
import RandomNumberGenerator from './utils/RandomNumberGenerator.js';
import GamePlayingError from './errors/GamePlayingError.js';

export default class RacingGame {
  #racingTrack;
  #refree;

  constructor(
    racingTrack,
    refree,
    randomNumberGenerator,
    _0 = paramType(racingTrack, RacingTrack),
    _1 = paramType(refree, Refree),
    _2 = paramType(randomNumberGenerator, RandomNumberGenerator)
  ) {
    this.#racingTrack = racingTrack;
    this.#refree = refree;
    this.randomNumberGenerator = randomNumberGenerator;
  }

  roundStart() {
    if (this.isFinish()) {
      throw new GamePlayingError(ERROR_MESSAGE.PLAY.MORE_ROUND_THAN_ALLOWED);
    }

    const isMoveFowardList = this.#getIsMoveFowardList();

    this.#racingTrack.moveEachCars(isMoveFowardList);
    this.#refree.clearRound();
  }

  isFinish() {
    return this.#refree.isGameFinish();
  }

  getRoundResult() {
    return this.#racingTrack.getRoundResult();
  }

  getWinners() {
    if (!this.isFinish()) {
      throw new GamePlayingError(ERROR_MESSAGE.PLAY.LEFT_ROUND);
    }
    const mostMoveFowardLength = this.#racingTrack.mostMoveFowardDistance();
    const winners = this.getRoundResult()
      .filter((car) => car.position === mostMoveFowardLength)
      .map((car) => car.name)
      .join(', ');

    return winners;
  }

  #getIsMoveFowardList() {
    const isMoveFowardList = this.randomNumberGenerator
      .createNumbers(
        RANDOM_NUMBER_RANGE.MIN,
        RANDOM_NUMBER_RANGE.MAX,
        this.#racingTrack.totalCarAmount()
      )
      .map((number) => this.#refree.isMovable(number));

    return isMoveFowardList;
  }
}
