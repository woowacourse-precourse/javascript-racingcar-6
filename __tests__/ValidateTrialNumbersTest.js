import { validateTrialNumbers } from "../src/ValidateTrialNumbers";

test("입력값이 0인 경우", () => {
  expect(() => validateTrialNumbers(0)).toThrow("[ERROR]");
});

test("입력값 형식이 잘못된 경우", () => {
  expect(() => validateTrialNumbers("abc")).toThrow("[ERROR]");
});
