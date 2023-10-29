import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange
  );
};

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("자동차 경주 게임: 이동 횟수", () => {
  test("입력한 이동 횟수만큼 게임 진행", async () => {
    const round ="3";
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", round];
    const outputs = [ 
      "pobi : -" ,"woni : ", 
      "pobi : --", "woni : ", 
      "pobi : ---", "woni : -"
    ];
    const randoms = [
      MOVING_FORWARD, STOP ,  
      MOVING_FORWARD, STOP,
      MOVING_FORWARD,MOVING_FORWARD
    ];
    const logSpy = getLogSpy(jest);

    mockQuestions( inputs);
    mockRandoms( [...randoms]);

    const app = new App();
    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  
  test("이동 횟수 0일때 진행결과", async()=>{
    const inputs=["pobi,woni","0"];
    const outputs =["pobi : ", "woni : ", "최종 우승자 : pobi, woni"];
    const logSpy = getLogSpy(jest);

    mockQuestions(inputs);

    const app = new App();
    await app.play();

    outputs.forEach((output)=>{
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output))
    });
  });
});
