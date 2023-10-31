import Car from "../src/models/car.js";

describe("Car Model 테스트", () => {
  test("시작, 끝의 연속 공백을 제외하고 길이가 5이하인 경우에만 Car 객체 생성 가능", () => {
    // given
    const validNames = ["1", "12", "123", "1234", "12345", "  12345", "12345  ", "     12345    "];
    const invalidNames = ["123456", " 123456", "123456 ", " 123456 "];

    // when & then
    validNames.forEach((validName) => {
      expect(() => new Car(validName)).not.toThrow();
    });
    invalidNames.forEach((invalidNames) => {
      expect(() => new Car(invalidNames)).toThrow();
    });
    expect(() => new Car()).toThrow();
  });

  test("전달받은 값이 임계값(4) 이상일 경우에만 이동", () => {
    // given
    const randoms = [3, 4];
    const result = [0, 1];
    const name = "test"

    // when & then
    const car = new Car(name);
    randoms.forEach((random, index) => {
      car.move(random);
      const location = result[index]
      expect(car.getLocation()).toBe(location);
    });
  });

  test("현재 자동차의 location 비교", () => {
    // given
    const carName = "test";
    const randoms = [4, 4];
    const locations = [1, 2, 3];
    const results = [1, 0, -1];

    // when
    const car = new Car(carName);
    randoms.forEach((random) => {
      car.move(random);
    });

    // then
    const answers = locations.map((location) => car.compareLocation(location));
    expect(answers).toEqual(results);
  });
});