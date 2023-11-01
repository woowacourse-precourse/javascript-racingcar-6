import { MissionUtils } from "@woowacourse/mission-utils";
import Racing from "../src/racingGame/Racing.js"

const mockQuestions = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
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



describe("Racing 클래스 테스트", () => {
  const racing = new Racing();

  test("makeScoreStorage 메소드 테스트", async () => {
    // given
    const inputs = ["hyun", "mong", "car", "good"];
    const outputs = [["hyun", "mong", "car", "good"], [0,0,0,0]];
    //mockQuestions(inputs);

    // when
    const result = racing.makeScoreStorage(inputs);

    // then
    expect(result).toEqual(outputs);
  });

  test("eachRacing 메소드 테스트", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = [["hyun", "mong", "car", "good"], [0,0,0,0]];
    const outputs = [["hyun", "mong", "car", "good"], [1,0,0,1]];
    const randoms = [MOVING_FORWARD, STOP, STOP, MOVING_FORWARD];
    
    mockRandoms(randoms);
    // when
    const result=racing.eachRacing(inputs);

    // then
    expect(result).toEqual(outputs);
  });

  test("printScore 메소드 테스트", async () => {
    // given
    const inputs = [["hyun", "mong", "car", "good"], [3,2,6,1]];
    const outputs = ["hyun : ---","mong : --","car : ------","good : -"];
    const logSpy = getLogSpy();

    // when
    racing.printScore(inputs);

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });  });

});
