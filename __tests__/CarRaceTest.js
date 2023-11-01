import { getRandomHead } from "../src/App.js";
import Car from "../src/Car.js";

describe("랜덤값을 이용한 자동차 전진/멈춤 테스트", () => {
  test("값이 4 미만일 경우, Car에 HeadCount(전진)를 추가 X", () => {
    const car = new Car("pobi");

    expect(getRandomHead(car, 3)).toEqual(false);
  });

  test("값이 4 이상일 경우, Car에 HeadCount(전진)를 추가", () => {
    const car = new Car("woni");

    expect(getRandomHead(car, 4)).toEqual(true);
  });
});