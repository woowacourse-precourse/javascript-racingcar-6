import Car from "../src/model/Car";
import Cars from "../src/model/Cars";

describe("함수 기능 테스트", () => {
  test("Car의 getName 메소드가 이름을 정상적으로 반환하는가", () => {
    const NAME = "우테코";
    const WRONG_NAME = "우테키";

    const car = new Car(NAME);

    expect(car.getName()).toBe(NAME);
    expect(car.getName()).not.toBe(WRONG_NAME);
  });

  test("Cars 생성 시 배열에 Car가 아닌 값을 넣었을 경우에 대한 예외 처리를 했는가", () => {
    const WRONG_INPUT1 = ["가짜 차"];
    const WRONG_INPUT2 = [{ name: "가짜 차" }];
    const CORRECT_INPUT = [new Car("진짜 차")];

    expect(() => new Cars(WRONG_INPUT1)).toThrow("[ERROR]");
    expect(() => new Cars(WRONG_INPUT2)).toThrow("[ERROR]");
    expect(() => new Cars(CORRECT_INPUT)).not.toThrow("[ERROR]");
  });
});
