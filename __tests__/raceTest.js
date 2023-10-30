import calculate from "../src/calculate";
import race from "../src/race";

jest.mock("../src/calculate");

beforeEach(() => {
  calculate.mockClear();
});

test("calculate호출 횟수 테스트", () => {
  const player = ["car1", "car2"];
  const userAttempts = 3;
  const results = race(player, userAttempts);
  calculate.mockReturnValue({ car1: "-", car2: "-" });

  expect(calculate).toHaveBeenCalledTimes(userAttempts);
});
