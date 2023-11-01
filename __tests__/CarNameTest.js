import { MissionUtils } from '@woowacourse/mission-utils';
import { getCarName } from '../src/functions/gameStart';

const mockQuestions = input => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

describe('자동차 이름 테스트', () => {
  test('정상적으로 입력한 경우', async () => {
    const input = 'pobi,woni,jun,minha';

    mockQuestions(input);

    await expect(getCarName()).resolves.not.toThrow();
  });

  test('자동차 이름이 6자 이상인 경우', async () => {
    const input = 'pobi,wonijun,minha';

    mockQuestions(input);

    await expect(getCarName()).rejects.toThrow(
      '[ERROR] 자동차 이름이 깁니다. 5자 이하로 입력해주세요.',
    );
  });

  test('자동차 이름이 없는 경우', async () => {
    const input = 'pobi,woni,,jun,minha';

    mockQuestions(input);

    await expect(getCarName()).rejects.toThrow(
      '[ERROR] 이름이 없는 자동차가 있습니다. 모든 자동차에 이름을 붙여주세요.',
    );
  });

  test('자동차 이름이 중복인 경우', async () => {
    const input = 'pobi,woni,jun,pobi,minha';

    mockQuestions(input);

    await expect(getCarName()).rejects.toThrow(
      '[ERROR] 중복된 이름이 있습니다. 중복되지 않게 입력해주세요.',
    );
  });

  test('입력을 아예 안 한 경우', async () => {
    const input = '';

    mockQuestions(input);

    await expect(getCarName()).rejects.toThrow(
      '[ERROR] 입력을 하지 않았습니다. 자동차의 이름을 입력해주세요.',
    );
  });
});
