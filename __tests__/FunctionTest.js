import Car from "../src/model/Car";
import Cars from "../src/model/Cars";
import CarNamesParser from "../src/parser/CarNamesParser.js";

describe("함수 기능 테스트", () => {
  test("Car의 getName 메소드가 이름을 정상적으로 반환하는가", () => {
    const NAME = "우테코";

    const car = new Car(NAME);

    expect(car.getName()).toBe(NAME);
  });

  test("Cars 생성 시 배열에 Car가 아닌 값을 넣었을 경우에 대한 예외 처리를 했는가", () => {
    const WRONG_INPUT1 = ["가짜 차"];
    const WRONG_INPUT2 = [{ name: "가짜 차" }];
    const CORRECT_INPUT = [new Car("진짜 차")];

    expect(() => new Cars(WRONG_INPUT1)).toThrow("[ERROR]");
    expect(() => new Cars(WRONG_INPUT2)).toThrow("[ERROR]");
    expect(() => new Cars(CORRECT_INPUT)).not.toThrow("[ERROR]");
  });

  test("CarNamesParser의 parser 메소드가 입력값을 ','를 기준으로 분리하는가", async () => {
    const input = "자동차1, 자동차2, 자동차3, 자동차4";

    expect(CarNamesParser.parse(input)).toHaveLength(4);
  });
});
