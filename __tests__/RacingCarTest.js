import RacingCar from "../src/RacingCar";
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

describe("레이싱카 출력 테스트", () => {
  test("2회 이상이면 실행결과를 보여줄때 한칸 띄고 출력한다.", async () => {
    // given
    const inputs = ["jame,kevin", "2"];
    const randoms = ["1", "4", "1", "4"];
    const answers = ["\n실행 결과", "jame : ", "kevin : -\n", "jame : ", "kevin : --\n"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const racingCar = new RacingCar();
    await racingCar.init();

    // then
    answers.forEach((answer) => {
      expect(logSpy).toHaveBeenCalledWith(answer);
    });
  });

  test("최종 레이스를 결과로 우승자를 뽑는다", () => {
    // given
    const playerResult = { jay: "--", jake: "---", brian: "---" };

    // when
    const racingCar = new RacingCar();
    const winners = racingCar.getWinners(playerResult);

    // then
    expect(winners).toEqual(["jake", "brian"]);
  });
});
