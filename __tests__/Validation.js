import Validation from '../src/Validation.js';

describe('사용자 입력값의 유효성을 검사하는 함수 테스트', () => {
  const validation = new Validation();

  test.each([
    ['제네시스', true],
    ['벤츠', true],
    ['5글자 이상', false],
  ])('자동차 이름 유효성 검사 함수 테스트', (inputs, expected) => {
    const isValidOutput = validation.isValidCarName(inputs);

    expect(isValidOutput).toBe(expected);
  });
});
