import App from '../src/App';
import { CAR_INPUT_DUPLICATE_PATTERN, CAR_INPUT_PATTERN, RETRY_INPUT_PATTERN, validate } from '../src/validate';

describe('자동차 경주 우승자 테스트', () => {
  test('우승자 1명', () => {
    const app = new App();
    const input = { a: 3, b: 2, c: 1 };
    const output = ['a'];

    expect(app.getWinners(input)).toEqual(output);
  });

  test('우승자 2명', () => {
    const app = new App();
    const input = { a: 2, b: 2, c: 1 };
    const output = ['a', 'b'];

    expect(app.getWinners(input)).toEqual(output);
  });

  test('우승자 3명', () => {
    const app = new App();
    const input = { a: 1, b: 1, c: 1 };
    const output = ['a', 'b', 'c'];

    expect(app.getWinners(input)).toEqual(output);
  });
});

describe('자동차 이름 입력값 검증 테스트', () => {
  test('5글자 초과 이름', () => {
    const input = 'abc,abcd,abcde,abcdef';

    expect(validate(input, CAR_INPUT_PATTERN)).toBe(false);
  });

  test('쉼표가 아닌 구분자', () => {
    const input = 'abc,abcd.abcde,abcdef';

    expect(validate(input, CAR_INPUT_PATTERN)).toBe(false);
  });

  test('이름 중복', () => {
    const input = 'abc,abcd,abcd,abcde';

    expect(validate(input, CAR_INPUT_DUPLICATE_PATTERN)).toBe(true);
  });
});

describe('재시도 횟수 입력값 검증 테스트', () => {
  test('숫자가 아님', () => {
    const input = '1a2b3c';

    expect(validate(input, RETRY_INPUT_PATTERN)).toBe(false);
  });

  test('소수', () => {
    const input = '123.45';

    expect(validate(input, RETRY_INPUT_PATTERN)).toBe(false);
  });
});
