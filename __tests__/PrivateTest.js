import User from "../src/User.js";
import Car from "../src/Car.js";

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
  ])('split 메서드로 주어진 값을 구분', async (input) => {
    mockQuestions(input);

    const user = new User();
   
    await expect(user.inputPlayersName()).resolves.toContainEqual('kim', 'park');
  });

  test.each([
    [['kim']]
  ])('split 메서드로 구분자가 포함되지 않은 경우 값을 그대로 반환', async (input) => {
    mockQuestions(input);

    const user = new User();

    await expect(user.inputPlayersName()).resolves.toContainEqual('kim');
  });

  test.each([
    [['kimkim']],
    [['kim,parkpark']],
    [['kimkim,park']]
  ])('이름에 대한 예외 처리', async (inputs) => {
    mockQuestions(inputs);

    const user = new User();

    await expect(user.inputPlayersName()).rejects.toThrow("[ERROR]");
  });

  test.each([
    [['5']]
  ])('이동 횟수에 대한 예외 처리', async (input) => {
    mockQuestions(input);

    const user = new User();

    await expect(user.inputMoveNum()).resolves.toEqual(5);
  })
});

describe("게임 로직 테스트", () => {
  test("무작위 값에 대한 전진 여부 확인", () => {
    const car = new Car();

    expect(car.checkMoveCondition(5)).toBeTruthy();
  })
})