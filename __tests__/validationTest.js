import App from '../src/App';

describe('validation 함수 기능 테스트', () => {
  test('자동차 이름의 길이가 5글자 이상인 경우 예외 처리', () => {
    const INPUT = ['pobi', 'bonbon', 'ade'];

    const APP = new App();

    expect(() => APP.validateCarNameLength(INPUT)).toThrow(
      '[ERROR] 자동차 이름을 5자 이하로 입력해 주세요.'
    );
  });

  test('길이가 0인 자동차 이름이 있을 경우 예외 처리', () => {
    const INPUT = ['tobi', '', 'bee'];

    const APP = new App();

    expect(() => APP.validateCarNameLength(INPUT)).toThrow(
      '[ERROR] 자동차 이름을 한 글자 이상 입력해 주세요.'
    );
  });

  test('아무런 값도 입력하지 않았을 경우 예외 처리', () => {
    const INPUT = [''];

    const APP = new App();

    expect(() => APP.validateCarNameLength(INPUT)).toThrow(
      '[ERROR] 자동차 이름을 한 글자 이상 입력해 주세요.'
    );
  });

  test('시도할 횟수를 입력하지 않았을 경우 예외 처리', () => {
    const INPUT = '';

    const APP = new App();

    expect(() => APP.validateCountNumber(INPUT)).toThrow(
      '[ERROR] 시도할 횟수를 입력해 주세요'
    );
  });

  test('시도할 횟수를 0회 입력 했을 경우 예외 처리', () => {
    const INPUT = '0';

    const APP = new App();

    expect(() => APP.validateCountNumber(INPUT)).toThrow(
      '[ERROR] 시도할 횟수를 1회 이상 입력해 주세요'
    );
  });

  test('시도할 횟수를 숫자가 아닌 문자를 입력 했을 경우 예외 처리', () => {
    const INPUT = '삼';

    const APP = new App();

    expect(() => APP.validateCountNumber(INPUT)).toThrow(
      '[ERROR] 숫자만 입력 가능합니다.'
    );
  });
});
