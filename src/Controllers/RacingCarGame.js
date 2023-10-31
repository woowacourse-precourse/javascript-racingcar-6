import { RacingInitializer, RacingExecutor, RacingResult } from "./index.js";

export default class RacingCarGame {
  async start() {
    const cars = await RacingInitializer.initializeCars();
    const raceround = await RacingInitializer.initializeRaceRound();

    RacingExecutor.runRaces(cars, raceround);
    RacingResult.announceWinner(cars);
  }
}
