import { RacingInitializer } from "../../src/Controllers";
import { InputView } from "../../src/Views";
import { Car } from "../../src/Models";

jest.mock("../../src/Views/inputView");
jest.mock("../../src/Models/Car");

describe("RacingInitializer", () => {
  test("initializeGame는 자동차와 시도 횟수를 초기화해야 함", async () => {
    // given
    const mockCarNames = ["jenn", "daniel"];
    const mockRaceRound = 5;

    InputView.promptCarNames.mockResolvedValue(mockCarNames);
    InputView.promptRaceRound.mockResolvedValue(mockRaceRound);
    Car.mockImplementation((name) => ({ name }));

    // when
    const [cars, raceRound] = await RacingInitializer.initializeGame();

    // then
    expect(cars.length).toBe(mockCarNames.length);
    expect(cars[0].name).toBe(mockCarNames[0]);
    expect(raceRound).toBe(mockRaceRound);
  });

  test("시도할 횟수가 숫자가 아닐 경우 예외 처리", async () => {
    // given
    const mockCarNames = ["jenn", "daniel"];
    const mockRaceRound = "str";

    InputView.promptCarNames.mockResolvedValue(mockCarNames);
    InputView.promptRaceRound.mockResolvedValue(mockRaceRound);
    Car.mockImplementation((name) => ({ name }));

    // when, then
    await expect(async () => {
      await RacingInitializer.initializeGame();
    }).rejects.toThrow("[ERROR]");
  });
});
