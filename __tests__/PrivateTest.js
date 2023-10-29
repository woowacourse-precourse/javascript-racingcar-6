import User from "../src/User.js";

import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('사용자 입력 테스트', () => {
  test.each([
    [['kim,park']]
  ])('split 메서드로 주어진 값을 구분', async (inputs) => {
    mockQuestions(inputs);

    const user = new User();

    await expect(user.inputPlayersName()).resolves.toContainEqual('kim', 'park');
  });

  test.each([
    [['kim']]
  ])('split 메서드로 구분자가 포함되지 않은 경우 값을 그대로 반환', async (inputs) => {
    mockQuestions(inputs);

    const user = new User();

    await expect(user.inputPlayersName()).resolves.toContainEqual('kim');
  });

  
})