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

test("이름 배열을 넘기면 각 이름을 가진 차 인스턴스 배열 생성", () => {
  const input = ["pobi", "woni", "jun"];
  const cars = racingCar.createCarArray(input);

  expect(cars.length).toBe(3);
  expect(cars.map((car) => car.name)).toContain("pobi", "woni", "jun");
});

test("숫자 만큼 길을 문자로 생성", () => {
  const input = 3;
  const result = racingCar.convertDistanceToString(input);

  expect(result).toBe("---");
});
