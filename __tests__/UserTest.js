import User from '../src/User.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('유저 테스트', () => {
  test.each([[[',car']], [['car,']], [[',car,']]])(
    '유저가 문장의 맨 앞이나 뒤에 ,를 입력할 경우 예외 처리',
    async (inputs) => {
      mockQuestions(inputs);
      const user = new User();
      await expect(
        user.getUserInputCarsNameArray(
          '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
        )
      ).rejects.toThrow('[ERROR]');
    }
  );
  test('유저가 이름이 5자 초과인 차 이름을 입력하는 경우 예외 처리', async () => {
    mockQuestions(['longcar, car']);
    const user = new User();
    await expect(
      user.getUserInputCarsNameArray(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
      )
    ).rejects.toThrow('[ERROR]');
  });
  test('차 이름을 올바르게 입력한 경우 입력값 반환', async () => {
    mockQuestions(['carA, carB, carC']);
    const user = new User();
    const result = await user.getUserInputCarsNameArray(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );
    expect(result).toEqual(['carA', 'carB', 'carC']);
  });
});
