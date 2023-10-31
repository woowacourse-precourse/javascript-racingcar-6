import {
  checkInputRaceNumber,
  checkCarNameDuplicate,
  checkCarNameLength,
} from '../src/Validate';

describe('입력값의 유효성 확인', () => {
  test('입력값이 0보다 큰지 확인', () => {
    const inValid = '-1';
    expect(checkInputRaceNumber(inValid)).toEqual(false);
  });

  test('입력값의 길이 확인', () => {
    const inValidName = 'racingcar';
    const emptyName = '';
    expect(checkCarNameLength([inValidName])).toEqual(false);
    expect(checkCarNameLength([emptyName])).toEqual(false);
  });

  test('입력값의 중복 확인', () => {
    const duplicateName = 'pobi';
    expect(checkCarNameDuplicate([duplicateName, duplicateName])).toEqual(
      false
    );
  });
});
