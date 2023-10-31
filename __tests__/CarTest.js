import Car from "../src/Car";

describe("Car 클래스 테스트", () => {
  test("입력된 랜덤 숫자가 4 이상이면 전진하고 그렇지 않으면 멈춘다.", () => {
    const inputs = [4, 3];
    const outputs = [
      ["qwer", "-"],
      ["asdf", ""],
    ];
    const cars = [new Car("qwer"), new Car("asdf")];

    inputs.forEach((input, index) => {
      cars[index].decideGo(input);
      expect(cars[index].getCurrentCarState()).toEqual(outputs[index]);
    });
  });
});
