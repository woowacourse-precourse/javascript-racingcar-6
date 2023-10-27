import App from "../src/App";
import Car from "../src/Car";
import { MissionUtils } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils");

describe("자동차 경주 게임 함수 기능 확인", () => {
  let app;

  beforeEach(() => {
    app = new App();
    MissionUtils.Console.print.mockClear();
    MissionUtils.Random.pickNumberInRange.mockClear();
  });

  // 게임 설정 테스트
  test("getInput: 자동차 이름 입력 받기", async () => {
    const mockNames = "test1,test2,test3";
    MissionUtils.Console.readLineAsync.mockResolvedValueOnce(mockNames);

    const result = await app.getInput(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    expect(result).toEqual(mockNames);
  });

  test("getInput: 경주 횟수 입력 받기", async () => {
    const mockNumber = 3;
    MissionUtils.Console.readLineAsync.mockResolvedValueOnce(mockNumber);

    const result = await app.getInput("시도할 횟수는 몇 회인가요?\n");

    expect(result).toEqual(mockNumber);
  });

  // 게임 실행 테스트
  test("playGame: 게임 실행하기", async () => {
    const mockCars = [new Car("test1"), new Car("test2")];
    const times = 3;

    MissionUtils.Random.pickNumberInRange.mockReturnValue(5);
    app.playGame(mockCars, times);

    expect(MissionUtils.Random.pickNumberInRange).toHaveBeenCalledTimes(
      times * mockCars.length
    );
  });

  // 결과 출력 테스트
  test("displayWinner: 우승자 결과 출력(한 명인 경우)", () => {
    const mockCars = [new Car("test1"), new Car("test2")];

    MissionUtils.Random.pickNumberInRange
      .mockReturnValueOnce(5)
      .mockReturnValueOnce(3);

    app.moveCars(mockCars);
    app.displayWinner(mockCars);

    expect(MissionUtils.Console.print).toHaveBeenCalledWith(
      "최종 우승자 : test1"
    );
  });

  test("should display multiple winners if there are ties", () => {
    const mockCars = [new Car("test1"), new Car("test2"), new Car("test3")];

    MissionUtils.Random.pickNumberInRange
      .mockReturnValueOnce(5)
      .mockReturnValueOnce(5)
      .mockReturnValueOnce(3);

    app.moveCars(mockCars);
    app.displayWinner(mockCars);

    expect(MissionUtils.Console.print).toHaveBeenCalledWith(
      "최종 우승자 : test1, test2"
    );
  });

  // 예외처리 테스트
  test("validateName: 자동차 이름이 5글자를 초과할 경우, 예외처리", () => {
    const badInputNames = "test1,test2,test3long";
    expect(() => app.validateName(badInputNames)).toThrow(
      "[ERROR] 자동차 이름은 5자 이하만 가능합니다."
    );
  });

  test("validateNumber: 경주할 횟수가 숫자가 아닌 경우, 예외처리", () => {
    const badInputNumber = "abcd";
    expect(() => app.validateNumber(badInputNumber)).toThrow(
      "[ERROR] 잘못된 값을 입력하였습니다."
    );
  });
});
