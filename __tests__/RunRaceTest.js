import Car from "../src/Car";
import Computer from "../src/Computer";
import { NUMBER } from "../src/constant";

describe("차수별 테스트", () => {
  test("자동차 인스턴스 생성 ", () => {
    const input = ["pobi", "drk"];
    const result = Computer.generateCars(input);
    const expected = [
      { name: "pobi", position: 0 },
      { name: "drk", position: 0 },
    ];
    expect(result).toEqual(expected);
  });

  test.each([
    {
      input: {
        name: "pobi",
        randomNumber: NUMBER.CAN_FORWARD,
      },
      expected: { name: "pobi", position: 1 },
    },
    {
      input: {
        name: "drk",
        randomNumber: NUMBER.CAN_FORWARD - 1,
      },
      expected: { name: "drk", position: 0 },
    },
    {
      input: {
        name: "hw",
        randomNumber: NUMBER.CAN_FORWARD,
      },
      expected: { name: "hw", position: 1 },
    },
  ])(
    "진행 가능 숫자 판별 결과에 따른 이동여부 검증",
    ({ input: { name, randomNumber }, expected }) => {
      const car = new Car(name);
      Computer.evaluateGoOrStop(car, randomNumber);
      expect(car.position).toBe(expected.position);
    },
  );
});
