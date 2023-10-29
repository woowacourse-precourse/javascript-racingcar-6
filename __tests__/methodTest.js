import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

// 사용자 입력을 모의화(mock)하는 함수
const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  // `readLineAsync` 메서드를 모의화하여 입력 값을 순차적으로 반환
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

// 랜덤 숫자를 모의화(mock)하는 함수
const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

// `Console.print` 메서드를 스파이(spy)하여 로그 출력 확인을 위한 함수
const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear(); // 스파이를 초기화
  return logSpy;
};

describe("메서드별 기능 테스트", () => {
  test("유효한 자동차 이름 입력", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["승규,수민, 민수", "2"];
    const message = ["승규,수민, 민수"];
    const randoms = [
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      STOP,
    ];
    const logSpy = getLogSpy(); // 로그 출력 스파이

    // 사용자 입력 및 랜덤 값 모의화
    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play(); // App의 `play` 메서드 실행

    // then
    message.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("유효하지 않은 자동차 이름 입력", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["승규승규승규,수민, 민수", "2"];
    const randoms = [
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      STOP,
    ];

    // 사용자 입력 및 랜덤 값 모의화
    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow(
      "[ERROR] 자동차 이름은 5글자까지 가능합니다."
    );
  });

  test("유효한 실행 횟수 입력", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["승규,수민", "5"];
    const message = ["5"];
    const randoms = [
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      STOP,
    ];
    const logSpy = getLogSpy(); // 로그 출력 스파이

    // 사용자 입력 및 랜덤 값 모의화
    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play(); // App의 `play` 메서드 실행

    // then
    message.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("유효하지 않은 범위의 실행 횟수 입력", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["승규,수민", "0"];
    const randoms = [
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      STOP,
    ];

    // 사용자 입력 및 랜덤 값 모의화
    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow(
      "[ERROR] 실행 횟수는 1 이상의 정수로만 입력 가능합니다."
    );
  });

  test("유효하지 않은 타입의 실행 횟수 입력", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["승규,민수", "ㅂ"];
    const randoms = [
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      STOP,
    ];

    // 사용자 입력 및 랜덤 값 모의화
    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow(
      "[ERROR] 샐행 횟수는 숫자만 입력할 수 있습니다."
    );
  });

  test("진행 상황 표시", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["승규,수민", "1"];
    const outputs = ["승규 : -", "수민 :"];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("우승자 표시", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["승규,수민", "3"];
    const outputs = ["최종 우승자 : 승규, 수민"];
    const randoms = [
      MOVING_FORWARD,
      STOP,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
