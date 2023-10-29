import RACING_GAME from '../constants/racingGame';

class RacingGame {
  #cars;

  #round;

  #currentRound;

  constructor({ cars = [], round = RACING_GAME.round.default }) {
    this.#cars = cars;
    this.#round = round;
    this.#currentRound = RACING_GAME.round.default;
  }
}

export default RacingGame;
