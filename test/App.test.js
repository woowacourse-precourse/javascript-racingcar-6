import { MissionUtils } from "@woowacourse/mission-utils";
import { carNameInput, gameNumberInput } from "../src/gameIntro.js";
import {
  carMoveText,
  carMoveEmptyArray,
  carMoveQualification,
} from "../src/gameMain.js";
import {
  winnerMovelength,
  getWinnerCarArray,
  resultText,
} from "../src/gameEnd.js";

const mockReadLineAsync = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(inputs[0]);
  });
};

describe("gameIntro 파일 테스트", () => {
  test("자동차 이름 입력받는 함수 테스트", async () => {
    const inputs = ["hong,sung,soo"];
    mockReadLineAsync(inputs);
    const result = await carNameInput();
    expect(result).toContainEqual("hong", "sung", "soo");
  });

  test("자동차 이름 예외처리", async () => {
    const inputs = ["Hongsungsoo"];
    mockReadLineAsync(inputs);
    await expect(carNameInput()).rejects.toThrow("[ERROR]");
  });

  test("게임 라운드 입력받는 함수 테스트", async () => {
    const inputs = [1];
    MissionUtils.Console.readLineAsync = jest.fn();
    MissionUtils.Console.readLineAsync.mockResolvedValue(
      Promise.resolve(inputs[0])
    );
    const result = await gameNumberInput();
    expect(result).toBe(1);
  });

  test("게임 라운드 예외 처리", async () => {
    const inputs = ["a"];
    MissionUtils.Console.readLineAsync = jest.fn();
    MissionUtils.Console.readLineAsync.mockResolvedValue(
      Promise.resolve(inputs[0])
    );
    expect(gameNumberInput()).rejects.toThrow("[ERROR]");
  });
});

describe("게임 진행 상황 출력 테스트", () => {
  test("자동차 전진 결과 출력 테스트", () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const carName = ["sung", "soo"];
    const carMoveArray = ["", ""];
    const outputs = ["sung : ", "soo : -"];

    MissionUtils.Random.pickNumberInRange = jest.fn();
    MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(STOP);
    MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(MOVING_FORWARD);
    const logSpy = jest.spyOn(MissionUtils.Console, "print");

    carMoveText(carName, carMoveArray);

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("자동차 전진 결과 배열 생성 테스트", () => {
    const carName = ["sung", "soo"];

    const result = carMoveEmptyArray(carName);
    expect(result).toContainEqual("", "");
  });

  test("자동차 전진 조건 테스트", () => {
    const randomNumber = 4;
    const result = carMoveQualification(randomNumber);
    expect(result).toBe("-");
  });

  test("자동차 스탑 조건 테스트", () => {
    const randomNumber = 3;
    const result = carMoveQualification(randomNumber);
    expect(result).toBe("");
  });
});

describe("gameEnd 파일 테스트", () => {
  test("우승자 자동차 전진길이 구하는 테스트", () => {
    const moveArray = ["---", "----", "--", ""];

    const result = winnerMovelength(moveArray);

    expect(result).toBe(4);
  });

  test("우승자 선별 테스트", () => {
    const carName = ["sung", "soo"];
    const carMove = ["-", "--"];
    const winnerLength = 2;

    const result = getWinnerCarArray(carName, carMove, winnerLength);

    expect(result).toContainEqual("soo");
  });

  test("우승자 출력 테스트", () => {
    const winnerCarArray = ["sung", "soo"];
    const output = "최종 우승자 : sung, soo";

    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();

    resultText(winnerCarArray);

    expect(logSpy).toHaveBeenCalledWith(output);
  });
});
