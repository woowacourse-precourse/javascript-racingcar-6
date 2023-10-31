import { RacingInitializer, RacingExecutor, RacingResult } from "./index.js";

export default class RacingCarGame {
  async start() {
    const [cars, raceround] = await RacingInitializer.initializeGame();
    RacingExecutor.runRaces(cars, raceround);
    RacingResult.announceWinner(cars);
  }
}
