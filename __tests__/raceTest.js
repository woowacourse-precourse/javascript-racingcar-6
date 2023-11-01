import calculate from "../src/calculate";
import race from "../src/race";

jest.mock("../src/calculate");

beforeEach(() => {
  calculate.mockClear();
});

test("calculate호출 횟수 테스트", () => {
  const player = ["car1", "car2"];
  const userAttempts = 3;
  calculate.mockReturnValue({ car1: "-", car2: "-" });
  race(player, userAttempts);

  expect(calculate).toHaveBeenCalledTimes(userAttempts);
});
