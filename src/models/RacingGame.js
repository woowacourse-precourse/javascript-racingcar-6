import { GAME_SETTING, SYMBOL_SETTING } from '../constants/Setting.js';
import Converter from '../utils/Converter.js';
import RandomNumberGenerator from '../utils/RandomNumberGenerator.js';

class RacingGame {
  #carDistanceMap;

  #carNames;

  #roundNumber;

  #status;

  #winner;

  constructor(inputCar, inputRound) {
    this.#status = SYMBOL_SETTING.emptyString;
    this.#roundNumber = Number(inputRound);
    this.#carNames = Converter.removeSpace(inputCar);
    this.#carDistanceMap = Converter.stringToMap(this.#carNames);
  }

  race() {
    let roundCount = GAME_SETTING.initialCount;
    while (roundCount <= this.#roundNumber) {
      this.move(this.#carDistanceMap);
      this.#carDistanceMap.forEach((value, key) => {
        this.#status += `${key}${SYMBOL_SETTING.space}${SYMBOL_SETTING.colon}${SYMBOL_SETTING.space}${value}${SYMBOL_SETTING.newLine}`;
      });
      roundCount += GAME_SETTING.increasingCount;
      if (roundCount <= this.#roundNumber) {
        this.#status += SYMBOL_SETTING.newLine;
      }
    }
    return this.#status;
  }

  move() {
    this.#carDistanceMap.forEach((value, key) => {
      const randomNumber = RandomNumberGenerator();
      if (randomNumber >= GAME_SETTING.fowardMinNumber) {
        const beforeDash = this.#carDistanceMap.get(key);
        this.#carDistanceMap.set(key, `${beforeDash}${SYMBOL_SETTING.dash}`);
      }
    });
  }

  findWinner() {
    const distanceCarMap = Converter.swapMap(this.#carDistanceMap);
    const winnerArr = [...distanceCarMap].sort((a, b) => b[0] - a[0])[0];
    this.#winner = winnerArr[1].join(SYMBOL_SETTING.winnerSeparator);
    return this.#winner;
  }
}

export default RacingGame;
