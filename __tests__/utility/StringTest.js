import {
  getHyphens,
  splitStringByComma,
  joinArrayWithCommaAndBlank,
} from '../../src/utility/string';
  
describe('문자열 함수 테스트', () => {
  test('주어진 수만큼 -를 리턴하는지 테스트', () => {
    expect(getHyphens(0)).toBe('');
    expect(getHyphens(1)).toBe('-');
    expect(getHyphens(5)).toBe('-----');
  });
  
  test('한 문자열을 ,를 기준으로 나눠 배열에 저장하는지 테스트', () => {
    expect(splitStringByComma('apple,banana,cherry')).toEqual([
      'apple',
      'banana',
      'cherry',
    ]);
      expect(splitStringByComma('')).toEqual(['']);
  });
  
  test('배열 요소들을 ", "로 이어붙여 하나의 문자열로 만드는지 테스트', () => {
    expect(joinArrayWithCommaAndBlank(['apple', 'banana', 'cherry'])).toBe(
      'apple, banana, cherry',
    );
    expect(joinArrayWithCommaAndBlank([])).toBe('');
  });
});