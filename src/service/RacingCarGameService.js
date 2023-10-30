import { RacingGame, RacingWinnerCalculator } from '../models/index.js';

const RacingGameService = {
  calculateRacingCarGameResult(carNames, moveCount) {
    const racingResult = RacingGame.of(carNames, moveCount).play();
    // TODO: racingResult.at(-1) 네이밍 고민해보기
    const racingWinners = RacingWinnerCalculator.from(racingResult.at(-1)).calculateRacingWinners();
    return { racingResult, racingWinners };
  },
};

export default RacingGameService;
