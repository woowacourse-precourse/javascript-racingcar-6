import Race from "../src/RacingCar/Race";

const race = new Race();

describe("자동차 이름 구분", () => {
  test("좌우 공백 없이 쉼표(,)로 문자열 구분", () => {
    const input = "pobi, wonii, yy 24";

    expect(race.splitWithoutSpace(input)).toContain("pobi", "wonii", "yy 24");
  });

  test("쉼표(,)가 없는 문자열이면 값을 그대로 반환", () => {
    const input = "pobi";

    expect(race.splitWithoutSpace(input)).toContain("pobi");
  });
});

test("이름 배열을 넘기면 각 이름을 가진 차 인스턴스 배열 생성", async () => {
  const input = ["pobi", "woni", "jun"];
  const cars = race.createCarArrayFrom(input);

  expect(cars.length).toBe(3);
  expect(cars.map((car) => car.name)).toContain("pobi", "woni", "jun");
});
