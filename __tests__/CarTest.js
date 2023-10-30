import Car from "../src/Car";
import { Random } from "@woowacourse/mission-utils";

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

describe("Car 객체 Test", () => {
  test("Car 객체 생성자", () => {
    const car = new Car("test");
    expect(car.carName).toEqual("test");
    expect(car.distance).toEqual(0);
  });

  test("Car 객체 move(), 난수 4일때 전진 Test", () => {
    //given
    const car = new Car("test");
    const MOVING_FORWARD = 4;

    mockRandoms([MOVING_FORWARD]);
    //when
    car.move();

    //then
    expect(car.distance).toEqual(1);
  });
  test("Car 객체 move(), 난수 3일때 멈춤 Test", () => {
    //given
    const car = new Car("test");
    const MOVING_FORWARD = 3;

    mockRandoms([MOVING_FORWARD]);
    //when
    car.move();

    //then
    expect(car.distance).not.toEqual(1);
  });
  test("Car이 2번 움직이고 toString() 확인", () => {
    //given
    const car = new Car("test");
    const MOVING_FORWARD = 4;

    mockRandoms([MOVING_FORWARD, MOVING_FORWARD]);
    //when
    car.move();
    car.move();

    //then
    expect(`${car}`).toEqual("test : --");
  });
});
