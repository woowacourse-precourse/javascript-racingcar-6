import { validateCarNames } from "../src/ValidateCarNames";

test("입력값이 비어있을 경우", () => {
  expect(() => validateCarNames("")).toThrow("[ERROR]");
});

test("입력값이 쉼표로 구분되어 있지 않을 경우", () => {
  expect(() => validateCarNames("pobiwoni")).toThrow("[ERROR]");
});

test("입력값의 길이가 5보다 큰 경우", () => {
  expect(() => validateCarNames("pobi,woni,stella")).toThrow("[ERROR]");
});

test("입력값 형식이 잘못된 경우", () => {
  expect(() => validateCarNames("123,456")).toThrow("[ERROR]");
});

test("입력값이 중복된 경우", () => {
  expect(() => validateCarNames("pobi,pobi,woni")).toThrow("[ERROR]");
});
