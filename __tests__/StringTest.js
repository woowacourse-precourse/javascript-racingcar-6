import RacingGame from "./RacingGame";
import App from "./App";
import * as MissionUtils from "@woowacourse/mission-utils";

describe("RacingGame", () => {
  // 테스트를 위해 MissionUtils.Console.print를 모의화합니다.
  MissionUtils.Console.print = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("play - 경주 상황과 우승자를 출력해야 합니다", async () => {
    // 자동차 이름과 시도 횟수를 모의화합니다.
    const 모의화된자동차이름 = "자동차1, 자동차2, 자동차3";
    const 모의화된시도횟수 = 5;

    // 비동기적인 사용자 입력을 모의화합니다.
    MissionUtils.Console.readLineAsync = jest
      .fn()
      .mockResolvedValueOnce(모의화된자동차이름)
      .mockResolvedValueOnce(String(모의화된시도횟수));

    // App 인스턴스를 생성하고 play 메서드를 호출합니다.
    const 앱 = new App();
    await 앱.play();

    // MissionUtils.Console.print가 예상한 메시지로 호출되었는지 확인합니다.
    expect(MissionUtils.Console.print).toHaveBeenCalledWith("자동차1 : -");
    expect(MissionUtils.Console.print).toHaveBeenCalledWith("자동차2 : -");
    expect(MissionUtils.Console.print).toHaveBeenCalledWith("자동차3 : -");
    expect(MissionUtils.Console.print).toHaveBeenCalledWith("자동차1 : --");
    expect(MissionUtils.Console.print).toHaveBeenCalledWith("자동차2 : --");
    expect(MissionUtils.Console.print).toHaveBeenCalledWith("자동차3 : --");
    expect(MissionUtils.Console.print).toHaveBeenCalledWith("자동차1 : ---");
    expect(MissionUtils.Console.print).toHaveBeenCalledWith("자동차2 : ---");
    expect(MissionUtils.Console.print).toHaveBeenCalledWith("자동차3 : ---");
    expect(MissionUtils.Console.print).toHaveBeenCalledWith("자동차1 : ----");
    expect(MissionUtils.Console.print).toHaveBeenCalledWith("자동차2 : ----");
    expect(MissionUtils.Console.print).toHaveBeenCalledWith("자동차3 : ----");
    expect(MissionUtils.Console.print).toHaveBeenCalledWith("자동차1 : -----");
    expect(MissionUtils.Console.print).toHaveBeenCalledWith("자동차2 : -----");
    expect(MissionUtils.Console.print).toHaveBeenCalledWith("자동차3 : -----");
    expect(MissionUtils.Console.print).toHaveBeenCalledWith(
      "최종 우승자 : 자동차1, 자동차2, 자동차3"
    );
  });

  test("play - 입력이 잘못된 경우 에러를 처리해야 합니다", async () => {
    // 유효하지 않은 사용자 입력 (빈 자동차 이름)을 모의화합니다.
    MissionUtils.Console.readLineAsync = jest
      .fn()
      .mockResolvedValueOnce("")
      .mockResolvedValueOnce("5");

    // App 인스턴스를 생성하고 play 메서드를 호출합니다.
    const 앱 = new App();
    await 앱.play();

    // 에러 메시지가 출력되었는지 확인합니다.
    expect(MissionUtils.Console.print).toHaveBeenCalledWith(
      "[ERROR] 자동차 이름을 입력하세요."
    );

    // 유효하지 않은 사용자 입력 (숫자가 아닌 시도 횟수)을 모의화합니다.
    MissionUtils.Console.readLineAsync = jest
      .fn()
      .mockResolvedValueOnce("자동차1, 자동차2, 자동차3")
      .mockResolvedValueOnce("잘못된값");

    // App 인스턴스를 생성하고 play 메서드를 호출합니다.
    await 앱.play();

    // 에러 메시지가 출력되었는지 확인합니다.
    expect(MissionUtils.Console.print).toHaveBeenCalledWith(
      "[ERROR] 숫자가 잘못된 형식입니다."
    );
  });
});
