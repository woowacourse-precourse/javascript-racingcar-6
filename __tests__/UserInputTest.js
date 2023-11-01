import checkNumber from '../src/utils/checkNumber';
import checkString from '../src/utils/checkString';

describe('유저 입력값 테스트', () => {
  test('리스트 내 중복 확인', () => {
    expect(checkString.checkListSameValue(['a', 'a', 'a'])).toEqual(true);
    expect(checkString.checkListSameValue(['a', 'b', 'c'])).toEqual(false);
  });
  test('리스트 내 6글자 이상의 값이 있는지 확인', () => {
    // prettier-ignore
    expect(checkString.checkListItemLongerThan(['a', 'a', 'abcdefg'],5)).toEqual(true);
    expect(checkString.checkListItemLongerThan(['a', 'b', 'c'], 5)).toEqual(
      false
    );
  });
  test('리스트 내 빈값 확인', () => {
    expect(checkString.checkListHasVoid(['a', 'b', 'c'])).toEqual(false);
    expect(checkString.checkListHasVoid(['a', 'b', ''])).toEqual(true);
  });
  test('리스트 값 내 공백 확인', () => {
    expect(checkString.checkListValueHasSpace(['a', 'b', 'c'])).toEqual(false);
    expect(checkString.checkListValueHasSpace(['a', 'b e', ''])).toEqual(true);
  });
  test('입력값이 숫자가 맞는지 확인', () => {
    expect(checkNumber.checkNumberType('123')).toEqual(true);
    expect(checkNumber.checkNumberType('ab123')).toEqual(false);
    expect(checkNumber.checkNumberType(true)).toEqual(false);
    expect(checkNumber.checkNumberType(undefined)).toEqual(false);
    expect(checkNumber.checkNumberType(null)).toEqual(false);
    expect(checkNumber.checkNumberType('4.8')).toEqual(false);
  });
  test('좌항값이 우항의값보다 큰지 확인', () => {
    expect(checkNumber.checkGreaterThan(1, 5)).toEqual(false);
    expect(checkNumber.checkGreaterThan(5, 1)).toEqual(true);
  });
});
