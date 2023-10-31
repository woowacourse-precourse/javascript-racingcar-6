import App from '../src/App';

const app = new App();
app.play();

describe('자동차 이름 입력값 테스트', () => {
  test('자동차 이름이 5자 이상일 경우', () => {
    let inputMap = new Map();
    inputMap.set('abcdef', 1);

    expect(app.checkRacingCarNameInputError(inputMap)).rejects.toThrow(
      '[ERROR]'
    );
  });

  test('자동차 이름이 빈 값인 경우', () => {
    let inputMap = new Map();
    inputMap.set('', 0);

    expect(app.checkRacingCarNameInputError(inputMap)).rejects.toThrow(
      '[ERROR]'
    );
  });

  describe('시도 횟수 입력값 테스트', () => {
    test('숫자가 아닐 경우', () => {
      const input = 'string';

      expect(app.checkTryCountError(input)).rejects.toThrow('[ERROR]');
    });

    test('0일 경우', () => {
      const input = 0;

      expect(app.checkTryCountError(input)).rejects.toThrow('[ERROR]');
    });

    test('빈 값일 경우', () => {
      const input = '';

      expect(app.checkTryCountError(input)).rejects.toThrow('[ERROR]');
    });
  });
});
