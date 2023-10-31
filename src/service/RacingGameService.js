import { RacingGame, RacingWinnerCalculator } from '../models/index.js';

/**
 * @namespace RacingGameService
 * @description 자동차 경주 게임의 결과와 우승자를 계산하여 반환하는 Service Layer
 */
const RacingGameService = {
  /**
   * @param {string[]} carNames - 참가하는 자동차들의 이름
   * @param {number} moveCount - 이동 횟수
   * @returns {import('../utils/jsDoc.js').RacingGameResult} 자동차 경주 게임의 결과 객체
   */
  calculateRacingGameResult(carNames, moveCount) {
    const racingResult = RacingGame.of(carNames, moveCount).runRace();
    const lastRacingStatus = racingResult.at(-1);
    const racingWinners = RacingWinnerCalculator.from(lastRacingStatus).calculateRacingWinners();
    return { racingResult, racingWinners };
  },
};

export default RacingGameService;
