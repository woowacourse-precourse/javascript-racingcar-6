import App from '../src/App';

describe('시도할 횟수 테스트', () => {
  test('숫자가 아닐 때', () => {
    const input = 'string';

    expect(() =>
      App.isValidCount(Number(input)).toThrow(
        '[ERROR] 1 이상의 정수를 입력해주세요!',
      ),
    );
  });

  test('정수가 아닐 때', () => {
    const input = '1.234';

    expect(() =>
      App.isValidCount(Number(input)).toThrow(
        '[ERROR] 1 이상의 정수를 입력해주세요!',
      ),
    );
  });

  test('음의 정수일 때', () => {
    const input = '-1';

    expect(() =>
      App.isValidCount(Number(input)).toThrow(
        '[ERROR] 1 이상의 정수를 입력해주세요!',
      ),
    );
  });
});
