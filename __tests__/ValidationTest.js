import Validation from '../src/Validation.js';

describe('Validation클래스의 hasProperCarName메소드', () => {
  const validation = new Validation();

  test('글자수가 잘못될 경우 false를 반환해야한다', () => {
    expect(validation.hasProperCarName('abcdef')).toBe(false);
    expect(validation.hasProperCarName('aaaaaaaaaa')).toBe(false);
    expect(validation.hasProperCarName('abcasdvervb')).toBe(false);
    expect(validation.hasProperCarName()).toBe(false);
  });

  test('숫자가 포함된 경우 false를 반환해야한다', () => {
    expect(validation.hasProperCarName('1abc')).toBe(false);
    expect(validation.hasProperCarName('abc1')).toBe(false);
    expect(validation.hasProperCarName('a1bc')).toBe(false);
    expect(validation.hasProperCarName('123')).toBe(false);
    expect(validation.hasProperCarName('1')).toBe(false);
    expect(validation.hasProperCarName('0')).toBe(false);
  });

  test('숫자나 문자가 아닌 경우 false를 반환해야한다', () => {
    expect(validation.hasProperCarName('{}')).toBe(false);
    expect(validation.hasProperCarName('[]')).toBe(false);
    expect(validation.hasProperCarName('#@')).toBe(false);
    expect(validation.hasProperCarName('#@%!')).toBe(false);
  });

  test('알파벳만 1~5글자인 경우 true를 반환한다.', () => {
    expect(validation.hasProperCarName('a')).toBe(true);
    expect(validation.hasProperCarName('ab')).toBe(true);
    expect(validation.hasProperCarName('abc')).toBe(true);
    expect(validation.hasProperCarName('abcd')).toBe(true);
    expect(validation.hasProperCarName('abcde')).toBe(true);
    expect(validation.hasProperCarName('ABCDE')).toBe(true);
    expect(validation.hasProperCarName('pobi')).toBe(true);
    expect(validation.hasProperCarName('woni')).toBe(true);
    expect(validation.hasProperCarName('jun')).toBe(true);
  });
});

describe('Validation클래스의 isProperTryTime메소드', () => {
  const validation = new Validation();

  test('숫자가 아닌 문자인 경우 false를 반환해야 한다', () => {
    expect(validation.isProperTryTime('abc')).toBe(false);
  });

  test('0으로 시작하는 경우 false를 반환해야 한다', () => {
    expect(validation.isProperTryTime('032')).toBe(false);
  });

  test('1이상의 숫자로만 구성되어있는 경우 true를 반환해야 한다.', () => {
    expect(validation.isProperTryTime('1')).toBe(true);
    expect(validation.isProperTryTime('2')).toBe(true);
    expect(validation.isProperTryTime('3')).toBe(true);
    expect(validation.isProperTryTime('100')).toBe(true);
    expect(validation.isProperTryTime('123')).toBe(true);
  });
});

describe('Validation 클래스의 isProperInput 메소드', () => {
  const validation = new Validation();

  test.each([
    ['pobiwonijun'],
    ['aaaaaa,b,c,d,e'],
    ['a1,b,c,d,e,f'],
    ['a,b,c,d,e,f,g1'],
  ])(
    '자동차 이름 입력 포멧이 잘못된 경우 false를 반환해야 한다.',
    (userInput) => {
      expect(validation.isProperInput(userInput)).toBe(false);
    }
  );

  test.each([
    ['pobi,woni,jun'],
    ['a,b,c,d,e'],
    ['a,b,c,d,e,f'],
    ['a,b,c,d,e,f,g'],
  ])(
    '자동차 이름 입력 포멧이 정상인 경우 true를 반환해야 한다.',
    (userInput) => {
      expect(validation.isProperInput(userInput)).toBe(true);
    }
  );
});
