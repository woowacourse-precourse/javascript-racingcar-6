import { Console, MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App";

jest.mock("@woowacourse/mission-utils", () => {
  const originalModule = jest.requireActual("@woowacourse/mission-utils");
  return {
    ...originalModule,
    Console: {
      readLineAsync: jest.fn(),
      print: jest.fn(),
    },
    MissionUtils: {
      ...originalModule.MissionUtils,
      Random: {
        pickNumberInRange: jest.fn(),
      },
    },
  };
});

describe("App 클래스 테스트", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("정확한 시도 횟수를 입력받는다.", async () => {
    // given
    Console.readLineAsync.mockResolvedValueOnce("car1, car2");
    Console.readLineAsync.mockResolvedValueOnce("5"); // 유효한 숫자로 모킹

    // when
    const app = new App();
    await app.play();

    // then
    expect(Console.readLineAsync).toHaveBeenCalledWith(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) : \n"
    );
    expect(Console.readLineAsync).toHaveBeenCalledWith(
      "시도할 횟수는 몇 회인가요?\n"
    );
    expect(Console.readLineAsync).toHaveBeenCalledTimes(2); // 두 번 호출됨
  });

  test("시도 횟수 입력이 정상적으로 처리된다.", async () => {
    // given
    Console.readLineAsync.mockResolvedValueOnce("car1, car2");
    Console.readLineAsync.mockResolvedValueOnce("5"); // 유효한 숫자로 모킹

    // when
    const app = new App();
    await app.play();

    // then
    expect(Console.readLineAsync).toHaveBeenCalledWith(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) : \n"
    );
    expect(Console.readLineAsync).toHaveBeenCalledWith(
      "시도할 횟수는 몇 회인가요?\n"
    );
    expect(app.ROUNDS).toEqual(5); // ROUNDS 변수가 정상적으로 설정되었는지 확인
  });
});
