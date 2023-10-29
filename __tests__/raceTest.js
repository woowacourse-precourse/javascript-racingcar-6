import calculate from "../src/calculate";
import race from "../src/race";

jest.mock("../src/calculate");

beforeEach(() => {
  calculate.mockClear();
});

test("test", () => {
  calculate.mockReturnValue("-");
  const player = ["car1", "car2"];
  const userAttempts = 3;
  const results = race(player, userAttempts);
  expect(calculate).toHaveBeenCalledTimes(userAttempts);
  expect(results).toEqual({
    car1: "---",
    car2: "---",
  });
});
