import Validation from '../src/Validation';

describe('자동차 이름 유효성 검사', () => {
  test('입력을 안했을 경우', () => {
    const inputs = [''];
    expect(() => Validation.checkCarName(inputs)).toThrow(Error);
  });

  test('자동차가 2대 미만인 경우', () => {
    const inputs = ['pobi'];
    expect(() => Validation.checkCarName(inputs)).toThrow(Error);
  });

  test('자동차 이름이 중복인 경우', () => {
    const inputs = ['pobi', 'pobi'];
    expect(() => Validation.checkCarName(inputs)).toThrow(Error);
  });

  test.each([[[',', 'pobi']], [['pobi', ',', 'woni']], [['pobi', ',']], [['pobi', ',', ',']]])(
    '자동차 이름을 입력하지 않고 쉼표를 입력한 경우',
    () => {
      expect(() => Validation.checkCarName()).toThrow(Error);
    },
  );

  test('자동차 이름이 5자를 초과하는 경우', () => {
    const inputs = ['pobi', 'wonicar'];
    expect(() => Validation.checkCarName(inputs)).toThrow(Error);
  });
});

describe('시도할 횟수 유효성 검사', () => {
  test('입력을 안했을 경우', () => {
    const input = '';
    expect(() => Validation.checkMoveCount(input)).toThrow(Error);
  });

  test('숫자가 아닐 경우', () => {
    const input = 'a';
    expect(() => Validation.checkMoveCount(input)).toThrow(Error);
  });

  test('정수가 아닐 경우', () => {
    const input = '2.3';
    expect(() => Validation.checkMoveCount(input)).toThrow(Error);
  });

  test('1 미만일 경우', () => {
    const input = '-10';
    expect(() => Validation.checkMoveCount(input)).toThrow(Error);
  });
});
