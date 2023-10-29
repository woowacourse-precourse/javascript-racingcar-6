import { getPlayersName, getAttemptNumber } from "../src/controller/GameCustomize.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    /*
    const input = inputs.shift();
    return Promise.resolve(input);*/
    return Promise.resolve(inputs);
  });
};

describe('유저가 입력한 정보를 비동기 적으로 잘 가져오는지 테스트', () => {


  test('플레이어 이름 테스트', async () => {
    const userInput = "pobi,crong,woong";
    const result = ["pobi","crong","woong"];

    mockQuestions(userInput);
    
    await expect(getPlayersName()).resolves.toEqual(result);  
  })

  test('게임 시도 횟수 테스트', async () => {
    const userInput = "5";
    const result = 5;

    mockQuestions(userInput);

    await expect(getAttemptNumber()).resolves.toEqual(result);
  })
})