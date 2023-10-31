import findKeysByValue from '../../src/utils/findKeysByValue';

describe('findKeysByValue 함수 테스트', () => {
  test('value의 key를 찾아 리스트로 반환', () => {
    // given
    const mockObject = {
      apple: 3000,
      banana: 3000,
      melon: 3000,
      tomato: 1000,
    };
    const targetValue = 3000;

    // when
    const keys = findKeysByValue(mockObject, targetValue);

    // then
    expect(keys).toContain('apple', 'banana', 'melon');
  });
  test('value애 해당하는 key가 없는 경우 빈 리스트 반환', () => {
    // given
    const mockObject = {
      apple: 3000,
      banana: 3000,
      melon: 3000,
      tomato: 1000,
    };
    const targetValue = 2000;

    // when
    const keys = findKeysByValue(mockObject, targetValue);

    // then
    expect(keys).toEqual([]);
  });
});
