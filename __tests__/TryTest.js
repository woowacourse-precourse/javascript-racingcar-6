import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";

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

describe("시도해 보기",()=>{
  test("임의의 시도",async()=>{
    // 입력
    const goArray = [1,4,3];
    const logSpy = getLogSpy();
    const inputs = ["pobi,woosu,drago","1"]
    const outputs = ['pobi : ','woosu : -','drago : ']
    
    // 처리
    mockQuestions(inputs);
    mockRandoms([...goArray]);
    
    const app = new App();
    await app.play();
    
    // 출력
    outputs.forEach((output) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output))
    });  
  });

  test("시도 횟수 5번", async () => {
    
    // 주어진 값
    const inputs = ["pobi,woosu,drago", "5"];
    const outputs = [
      'pobi : ','woosu : -','drago : ',
      'pobi : -','woosu : --','drago : ',
      'pobi : --','woosu : ---','drago : ',
      'pobi : --','woosu : ----','drago : ',
      'pobi : ---','woosu : -----','drago : -',
    ];
    const randoms = [
      1,4,3,
      5,7,2,
      9,5,2,
      1,9,3,
      8,7,6
      ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // 실행될 때
    const app = new App();
    await app.play();

    // 그러면 어떻게 나오는지 확인
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("4명 6시도 우승자 2명", async () => {
    // 입력
    const inputs = ["jin,conan,ran,woosu", "6"];
    const outputs = [
      'jin : ','conan : ','ran : -','woosu : -',
      'jin : -','conan : ','ran : --','woosu : -',
      'jin : --','conan : -','ran : ---','woosu : --',
      'jin : --','conan : --','ran : ----','woosu : ---',
      'jin : ---','conan : --','ran : ----','woosu : ---',
      'jin : ---','conan : ---','ran : ----','woosu : ----'
    ];
    const randoms = [
      2,3,4,5,
      9,2,5,3,
      4,9,4,7,
      1,8,4,6,
      7,3,1,5,
      2,8,3,3
      ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // 실행
    const app = new App();
    await app.play();

    // 결과
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
})