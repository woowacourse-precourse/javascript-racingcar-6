import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "../src/model/Car";
import Cars from "../src/model/Cars";
import CarNamesParser from "../src/parser/CarNamesParser.js";
import IntParser from "../src/parser/IntParser";
import OutputView from "../src/view/OutputView";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

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

  test("CarNamesParser의 parse 메소드가 입력값을 ','를 기준으로 분리하는가", () => {
    const input = "자동차1, 자동차2, 자동차3, 자동차4";

    expect(CarNamesParser.parse(input)).toHaveLength(4);
  });

  test("IntParser의 parse 메소드가 정수 외 형태의 입력 값을 예외 처리하는가", () => {
    const CORRECT_INPUT = "12";
    const WRONG_INPUT = "2.3";
    const WRONG_INPUT2 = "잘못된 입력";

    expect(() => IntParser.parse(CORRECT_INPUT)).not.toThrow("[ERROR]");
    expect(() => IntParser.parse(WRONG_INPUT)).toThrow("[ERROR]");
    expect(() => IntParser.parse(WRONG_INPUT2)).toThrow("[ERROR]");
  });

  test("OutputView의 printWinners 메소드가 결과를 정상적으로 출력하는가", () => {
    const MOCK_WINNERS = ["포비", "왼손", "메이커준"];

    const EXPECTED_PRINT = "최종 우승자 : 포비, 왼손, 메이커준";

    const logSpy = getLogSpy();

    OutputView.printWinners(MOCK_WINNERS);
    expect(logSpy).toHaveBeenCalledWith(EXPECTED_PRINT);
  });
});
