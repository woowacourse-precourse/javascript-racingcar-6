import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import MESSAGE from "../src/Message.js";

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

describe("자동차 경주 게임", () => {

  test("입력 메세지", async()=>{
    const inputs=["pobi,woni","0"];
    const outputs =[MESSAGE.inputName, inputs[0], MESSAGE.inputRound, inputs[1], MESSAGE.gameResult ];
    const randoms =[1,1];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    outputs.forEach((output)=>{
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output))
    });
  });
  
  test("전진-정지", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const outputs = ["pobi : -" ,"woni :"];
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
  
  test("이동 횟수 0일때 진행결과", async()=>{
    const inputs=["pobi,woni","0"];
    const outputs =["pobi : ", "woni : ", "최종 우승자 : pobi, woni"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);

    const app = new App();
    await app.play();

    outputs.forEach((output)=>{
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output))
    });
  });

  test("입력한 이동 횟수만큼 게임 진행", async () => {
    const round =3;
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
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("단일 우승자", async()=>{
    const round =2;
    const MOVING_FORWARD =4;
    const STOP =3;
    const inputs =["pobi,woni,apple", round];
    const randoms =[
      MOVING_FORWARD,STOP,MOVING_FORWARD,
      MOVING_FORWARD,STOP,STOP,
      STOP,STOP,STOP
    ];
    const outputs =[
      "pobi : --", "woni : ","apple : -" ,
    "최종 우승자 : pobi"
  ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });

  });

  test("복수 우승자", async()=>{
    const round =3;
    const MOVING_FORWARD =4;
    const STOP =3;
    const inputs =["poBi,woni,Apple", round];
    const randoms =[
      MOVING_FORWARD,STOP,MOVING_FORWARD,
      MOVING_FORWARD,STOP,STOP,
      STOP,STOP,MOVING_FORWARD
    ];
    const outputs =[
      "poBi : --", "woni : ","Apple : --" ,
      "최종 우승자 : poBi, Apple"
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });

  });

  test.each([
    [["po비,javii" ,"1"]],
    [["pobi,자비","1"],["123","하나12","1"]]
  ])("이름에 대한 예외 처리:5자 이하 모든 문자 가능", async (inputs) => {
    // given
    mockQuestions(inputs);
    const logSpy = getLogSpy();
    // when
    const app = new App();

    await app.play();
    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(inputs.join(',')))
  });
  
  test.each([
    [["pobi,javaji"]],
    [["pobi,eastjun"]]
  ])("이름에 대한 예외 처리: 5자 초과 글자 불가", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test.each([ [["pobi,woni","-1"]],
    [["pobi,woni","one"]] ,[["pobi,woni","하나"]] 
  ]
  )("이동 횟수 대한 예외 처리: 0이상의 숫자만 가능", async(inputs)=>{
    mockQuestions(inputs);
    const app =new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  })

});
