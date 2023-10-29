import { RacingResult, RacingWinnerCalculator } from '../models/index.js';

const RacingGameService = {
  calculateRacingCarGameResult(carNames, moveCount) {
    const racingResult = RacingResult.of(carNames, moveCount).calculateRacingResult();
    const racingWinners = RacingWinnerCalculator.from(racingResult.at(-1)).calculateRacingWinners();
    return { racingResult, racingWinners };
  },
};

export default RacingGameService;
