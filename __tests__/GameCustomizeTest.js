import { getPlayersName, getAttemptNumber } from "../src/controller/GameCustomize.js";
import { MissionUtils } from "@woowacourse/mission-utils";

//값을 넣을때 [] 한겹 빼주기
const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    
    return Promise.resolve(inputs);
  });
};
//값을 넣을때 [] 필요
const mockQuestions2 = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    
    const input = inputs.shift();
    return Promise.resolve(input);
    
  });
};

describe('비동기 유저 입력값 유효성 및 오류 잡아내는지 테스트', () => {
  test('올바른 자동차 이름을 넣었을때', async () => {
    const userInput = "pobi,crong,woong";
    const result = ["pobi","crong","woong"];
    const userWrongInput = "pobi,crong,,";

    mockQuestions(userInput);
    
    await expect(getPlayersName()).resolves.toEqual(result);
  })

  //이건 한단어만 테스트할 수 있음
  test('플레이어 이름 오류났을때', async () => {
    const userInput = "pobi,";
    
    mockQuestions(userInput);

    await expect(getPlayersName()).rejects.toThrow('[ERROR]');
  })

  test('올바른 게임 시도 횟수 넣었을때', async () => {
    const userInput = '1004';
    const result = 1004;

    mockQuestions(userInput);

    await expect(getAttemptNumber()).resolves.toEqual(result);
  })

  //mockQuestions2 사용
  test.each([
    [["pobi,"]],
    [["pobi,crong,,"]],
    [["pobi,cronnnng"]],
    [["pobi,,crong"]]
  ])('자동차 이름 규칙에 위반되는 것들', async (inputs) => {

    mockQuestions2(inputs);

    await expect(getPlayersName()).rejects.toThrow("[ERROR]");
  })
  //mockQuestions 사용
  test.each([
    ["pobi"],
    ["chanwoong,pobi"],
    ["pobi,"],
    [",pobi"],
    ["pobi,,crong"],
    [",pobi,chanwoong,,crong,"]
  ])('자동차 이름 규칙에 위반되는 것들', async (inputs) => {

    mockQuestions(inputs);
    await expect(getPlayersName()).rejects.toThrow("[ERROR]");
  })

})