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
  test('유효한 자동차 이름을 입력하면 유효성 검사를 통과한다', async () => {
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
  ])('유효하지 않은 자동차 이름을 입력하지 않으면 유효성 그에 해당하는 에러메시지를 출력한다.', async (inputs) => {
    // given
    mockQuestions([inputs]);

    // then
    const name = await getCarNames();
    expect(() => checkValidInput(name)).toThrow('[ERROR]');
  });

  //시도횟수 유효성 검사
  test('유효한 시도 횟수를 입력하면 테스트를 통과한다.', async () => {
    const tryInput = 2;
    const result = 2;

    mockQuestions([tryInput]);

    const count = await getAttemptCount();
    const validatedCount = checkValidCount(count);
    expect(validatedCount).toEqual(result);
  });
  test.each(['', 'a'])(
    '유효하지 않은 시도 횟수를 입력하면 그에 해당하는 에러메시지를 출력한다.',
    async (inputs) => {
      // given
      mockQuestions([inputs]);

      // then
      const count = await getAttemptCount();
      expect(() => checkValidCount(count)).toThrow('[ERROR]');
    },
  );
});
