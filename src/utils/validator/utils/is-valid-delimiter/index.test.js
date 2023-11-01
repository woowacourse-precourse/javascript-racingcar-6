import { SYSTEM } from '../../../../constants/System.js';
import isValidDelimiter from './index.js';

describe('is-valid-delimiter', () => {
  test('의도한 구분자를 입력하였을 때 true 리턴  ', () => {
    // given
    const input = 'aa,bb,cc';

    // when
    // then
    expect(isValidDelimiter(input, SYSTEM.delimiter)).toBe(true);
  });

  test('의도한 구분자를 단 하나도 입력하지 않았을 때 false 리턴', () => {
    // given
    const input = 'aa.bb.cc';

    // when
    // then
    expect(isValidDelimiter(input, SYSTEM.delimiter)).toBe(false);
  });
});
