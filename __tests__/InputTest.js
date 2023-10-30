import { MissionUtils } from '@woowacourse/mission-utils';

import { getCarNames } from '../src/utils/input';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('자동차 경주 게임 입력 테스트', () => {
  describe('자동차 이름 입력 테스트', () => {
    test('자동차 이름을 쉼표를 기준으로 구분하여 입력받고 배열로 반환', async () => {
      const inputs = ['sso,hyun,na'];
      mockQuestions(inputs);

      await expect(getCarNames()).resolves.toEqual(['sso', 'hyun', 'na']);
    });

    test('자동차 이름을 잘못된 값으로 입력한 경우 예외 발생', async () => {
      const inputs = ['sso,hyun,'];
      mockQuestions(inputs);

      await expect(getCarNames()).rejects.toThrow('[ERROR]');
    });
  });
});
