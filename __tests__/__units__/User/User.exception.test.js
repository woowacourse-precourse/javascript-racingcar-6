import ERROR_MESSAGE from '../../../src/constants/error.js';
import User from '../../../src/domain/User.js';

describe('User 예외 테스트', () => {
  it.each([{ name: '' }, { name: ' ' }, { name: '   ' }])(
    '입력받은 값이 공백일 경우 발생시킨다.',
    ({ name }) => {
      expect(() => {
        // given & when
        User.of(name);

        // then
      }).toThrow(ERROR_MESSAGE.user.isBlankName);
    },
  );

  it.each([
    { name: 12 },
    { name: true },
    { name: null },
    { name: {} },
    { name: [] },
    { name: undefined },
  ])('입력받은 값이 문자열이 아닐 경우 에러를 발생시킨다. (input: $input)', ({ name }) => {
    expect(() => {
      // given & when
      User.of(name);

      // then
    }).toThrow(ERROR_MESSAGE.user.isNotStringName);
  });

  it.each([{ name: 'jackson' }, { name: 'cooper' }])(
    '입력받은 값이 5자 이상일 경우 에러를 발생시킨다.',
    ({ name }) => {
      expect(() => {
        // given & when
        User.of(name);

        // then
      }).toThrow(ERROR_MESSAGE.user.isOverMaxLengthName);
    },
  );
});
