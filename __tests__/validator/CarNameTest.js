import validateCarName from '../../src/validates/carName';

describe('자동차 이름 검사기 테스트', () => {
  test('정상적인 값 입력 시 이름을 담은 배열 반환', () => {
    const input = 'woowa,eunki,ksy';
    const result = validateCarName(input);

    expect(result).toEqual(['woowa', 'eunki', 'ksy']);
  });

  test('쉼표를 기준으로 이름 분류 후 공백 제거', () => {
    const input = 'woowa, ksy ';
    const result = validateCarName(input);

    expect(result).toEqual(['woowa', 'ksy']);
  });

  test('비어있는 값은 unnamed 이름 부여', () => {
    const input = 'woowa,';
    const result = validateCarName(input);

    expect(result).toEqual(['woowa', 'unnamed']);
  });

  test('5글자 초과 시 예외 발생', () => {
    const input = 'woowa,hasesy';

    expect(() => validateCarName(input)).toThrow(
      '[ERROR] 이름은 5자 이하만 가능합니다.',
    );
  });
});
