import App from "../src/App.js";
import InputView from "../src/view/InputView.js";
import ModelView from "../src/modelView/RaceCarModel.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("기능1 - 경주 참여 자동차 이름 받기", () => {
  test("자동차 이름 입력값 구분 테스트", async () => {
    const inputs = "pobi,woni,jun";
    const outputs = ["pobi", "woni", "jun"];

    mockQuestions([inputs]);

    const result = await InputView.readUserRaceCarName();

    await expect(result).toEqual(outputs);
  });

  test("구분자가 포함되지 않은 경우 값을 그대로 반환", async () => {
    const inputs = ["pobi"];
    const outputs = ["pobi"];

    mockQuestions(inputs);

    const result = await InputView.readUserRaceCarName();

    await expect(result).toEqual(outputs);
  });

  test("각 자동차 이름 앞, 뒤에 공백이 있는 경우 제거 후 반환", async () => {
    const inputs = ["pobi,  woni,jun  "];
    const outputs = ["pobi", "woni", "jun"];

    mockQuestions(inputs);

    const result = await InputView.readUserRaceCarName();

    await expect(result).toEqual(outputs);
  });

  test.each([[["pobi,wo  ni"]], [["p    i,woni"]]])(
    "자동차 이름이 5자를 초과해 입력된 경우 ERROR 반환(이름 문자열 내 공백도 자수에 포함)",
    async (inputs) => {
      mockQuestions(inputs);

      await expect(InputView.readUserRaceCarName()).rejects.toThrow("[ERROR]");
    },
  );
});

describe("기능2 - 자동차 경주 게임 시도 횟수 받기", () => {
  test.each([[["열번 실행해주세요"]], [["10번"]], [["0"]]])(
    "자동차 경주 게임 시도 횟수 입력값이 Number타입 아닐 시, 0입력시 에러 반환",
    async () => {
      await expect(InputView.readAttemptsCount()).rejects.toThrow("[ERROR]");
    },
  );
});

describe("기능3 - 게임 진행", () => {
  test("랜덤값이 4이상일 경우 '-'반환", async () => {
    const input = ["6"];

    mockRandoms(input);

    expect(ModelView.calcMovementCount()).toBe("-");
  });

  test("랜덤값이 3이하일 경우 ''반환", async () => {
    const input = ["3"];

    mockRandoms(input);

    expect(ModelView.calcMovementCount()).toBe("");
  });
});

describe("기능4 - 게임 결과", () => {
  test("우승자가 여러명일 경우 그대로 출력", async () => {
    const MOVING_FORWARD = 4;
    const inputs = ["pobi,woni", "1"];
    const randoms = [MOVING_FORWARD, MOVING_FORWARD];
    const winners = "최종 우승자 : pobi, woni";
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    expect(logSpy).toHaveBeenCalledWith(winners);
  });

  test("우승자가 1명일 경우 그대로 출력", async () => {
    const inputs = ["pobi,woni", "1"];
    const winner = ["pobi"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);

    const app = new App();
    await app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(winner[0]));
  });
});
