import { RacingGame, RacingWinnerCalculator } from '../models/index.js';

const RacingGameService = {
  calculateRacingGameResult(carNames, moveCount) {
    const racingResult = RacingGame.of(carNames, moveCount).runRace();
    const lastRacingStatus = racingResult.at(-1);
    const racingWinners = RacingWinnerCalculator.from(lastRacingStatus).calculateRacingWinners();
    return { racingResult, racingWinners };
  },
};

export default RacingGameService;
