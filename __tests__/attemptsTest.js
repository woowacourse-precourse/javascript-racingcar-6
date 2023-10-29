import attempts from "../src/attempts";

test("시도 횟수 입력 테스트", () => {
  const input = 3;

  expect(() => {
    attempts(input).toBe(3);
  });
});
