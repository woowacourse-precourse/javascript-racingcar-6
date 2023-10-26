import RacingCar from "../src/RacingCar/RacingCar";

const racingCar = new RacingCar();

test("쉼표(,)로 문자열 구분", () => {
  const input = "pobi,woni,jun";

  expect(racingCar.splitName(input)).toContain("pobi", "woni", "jun");
});

test("쉼표(,)가 없는 문자열이면 값을 그대로 반환", () => {
  const input = "pobi";

  expect(racingCar.splitName(input)).toContain("pobi");
});
