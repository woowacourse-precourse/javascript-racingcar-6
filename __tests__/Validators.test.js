import Validators from '../src/utils/validator/index.js';

describe('Validators test', () => {
  describe('checkRacingVehicleName', () => {
    test.each([['aa,bb,cc,dd'], ['도레,미파,솔라,시도'], ['도a,레b,미c'], ['abcde,where,tomma']])(
      ' %s을 입력하였을 때 에러가 발생하지 않는다.',
      (input) => {
        expect(() => {
          Validators.checkRacingVehicleName(input);
        }).not.toThrow();
      },
    );

    test.each([
      ['23,45,23'],
      ['도레.미파.솔라'],
      [',aa,bb,cc,'],
      ['aa/bb/cc/dd'],
      ['도레23,mi#,tomato'],
    ])(' %s을 입력하였을 때 return %s', (input) => {
      expect(() => {
        Validators.checkRacingVehicleName(input);
      }).toThrow();
    });
  });
});
