import { Console } from '@woowacourse/mission-utils';
import InputValidator from '../src/utils/InputValidator';
import App from '../src/App';

const mockQuestions = inputs => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(inputs);
  });
};

describe('입력 값 검증', () => {
  test.each(['pobi ,woni', 'pobi,'])('사이 공백이 있을 때 예외 처리', input => {
    expect(() => InputValidator.checkCarName(input.split(','))).toThrow(
      '[ERROR]',
    );
  });

  test.each([0, -1, 'string'])('시도 횟수 1보다 큰 숫자 인지 검증', input => {
    expect(() => InputValidator.checkMoveCount(input)).toThrow('[ERROR]');
  });

  test('중복된 이름 예외 처리', async () => {
    // given
    const inputs = 'pobi,pobi,woni';
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });
});
