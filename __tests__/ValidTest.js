import { MissionUtils } from '@woowacourse/mission-utils';
import { getCarNames, getAttemptCount } from '../src/views/InputView';
import { checkValidInput, checkValidCount } from '../src/models/CheckValidInput';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('사용자의 입력값에 대한 유효성 테스트', () => {
  //자동차 이름 유효성 검사
  test('올바른 자동차 이름을 넣은 경우', async () => {
    const carInput = 'pobi,crong,woong';
    const result = carInput.split(',');

    //임의 입력
    mockQuestions([carInput]);

    const name = await getCarNames();
    const validatedName = checkValidInput(name);
    expect(validatedName).toEqual(result);
  });

  test.each([
    [''],
    ['pobieastjun'],
    ['pobi'],
    ['pobi,eastjun'],
    ['pobi,,eastjun'],
    ['pobi, ,eastjun'],
    ['pobi,pobi'],
  ])('유효하지 않은 자동차 이름에 대한 예외처리', async (inputs) => {
    // given
    mockQuestions([inputs]);

    // then
    const name = await getCarNames();
    expect(() => checkValidInput(name)).toThrow('[ERROR]');
  });

  //시도횟수 유효성 검사
  test('올바른 시도 횟수를 넣은 경우', async () => {
    const tryInput = 2;
    const result = 2;

    mockQuestions([tryInput]);

    const count = await getAttemptCount();
    const validatedCount = checkValidCount(count);
    expect(validatedCount).toEqual(result);
  });
  test.each(['', 'a'])(
    '유효하지 않은 시도 횟수를 넣은 경우',
    async (inputs) => {
      // given
      mockQuestions([inputs]);

      // then
      const count = await getAttemptCount();
      expect(() => checkValidCount(count)).toThrow('[ERROR]');
    },
  );
});
