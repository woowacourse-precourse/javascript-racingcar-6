import Validators from '../src/utils/validator';

describe('Validators test', () => {
  describe('checkRacingVehicleName', () => {
    test.each([
      ['aa,bb,cc,dd', 'true'],
      ['도레,미파,솔라,시도', 'true'],
      ['도a,레b,미c', 'true'],
      ['airbnb', 'where', 'tomato', 'true'],
    ])(' %s을 입력하였을 때 return %s', (input, expected) => {
      expect(Validators.checkRacingVehicleName(input)).toBe(expected);
    });

    test.each([
      ['23,45,23', false],
      ['도레.미파.솔라', false],
      [',aa,bb,cc,', false],
      ['aa/bb/cc/dd', false],
      ['도레23,mi#,tomato', false],
    ])(' %s을 입력하였을 때 return %s', (input, expected) => {
      expect(Validators.checkRacingVehicleName(input)).toBe(expected);
    });
  });
});
