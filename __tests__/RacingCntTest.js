import RacingCntError from '../src/utils/error/racing_cnt_error.js';

test.each([
  [''],
  ['abc'],
  ['0'],
])('경주 횟수에 대한 예외 처리', (input) => {
  expect(() => {
    const racingCntError = new RacingCntError(input);
    racingCntError.racingCntNotExist();
    racingCntError.racingCntNotNum();
    racingCntError.racingCntNotPositiveNum();
  }).toThrow('[ERROR]');
});