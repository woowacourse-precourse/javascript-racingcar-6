import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('게임 유저이름 입력 테스트', () => {
  test('올바른 한 대 이름 입력 확인', async () => {
    // given
    const input = ['서진'];
    const output = '서진';
    mockQuestions(input);

    // when
    const result = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );

    // then
    expect(result).toEqual(output);
  });

  test('올바른 여러대 이름 입력 확인', async () => {
    // given
    const inputs = ['서진,harry,rose,lucy,영현'];
    const output = '서진,harry,rose,lucy,영현';
    mockQuestions(inputs);

    // when
    const result = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );

    // then
    expect(result).toEqual(output);
  });

  test.each([
    [['pobi,javaji']],
    [['pobi,eastjun']],
    [['seoji,']],
    [['서진/서진']],
    [['seoji|yeonz']],
    [['seoji yeonz']],
    [['@dee#$,hi!!!!']],
  ])('게임 유저 이름 예외 처리', async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.getUserNameInput()).rejects.toThrow('[ERROR]');
  });
});
