import {
  RacingResult,
  RacingExecutor,
  RacingInitializer,
  RacingCarGame,
} from "../../src/Controllers/index.js";

jest.mock("../../src/Controllers/RacingInitializer.js");
jest.mock("../../src/Controllers/RacingExecutor.js");
jest.mock("../../src/Controllers/RacingResult.js");

describe("RacingCarGame", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("게임이 올바르게 시작되는지 테스트", async () => {
    // given
    RacingInitializer.initializeGame.mockResolvedValue([[], 0]);
    const game = new RacingCarGame();

    // when
    await game.start();

    // then
    expect(RacingInitializer.initializeGame).toHaveBeenCalled();
    expect(RacingExecutor.runRaces).toHaveBeenCalled();
    expect(RacingResult.announceWinner).toHaveBeenCalled();
  });
});
