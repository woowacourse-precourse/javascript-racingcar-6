import { SYSTEM } from '../../src/constants/System.js';
import Converter from '../../src/utils/StringConvertor.js';

describe('Converter test', () => {
  describe('splitStringToArrayByDelimiter', () => {
    test(' 구분자에 맞게 string에서 array로 변환하는지 확인 (쉼표 사용)', () => {
      // given
      const input = 'aa,bb,cc';
      const result = ['aa', 'bb', 'cc'];

      // when
      const output = Converter.splitStringToArrayByDelimiter(input, SYSTEM.delimiter);

      // then
      expect(output).toEqual(result);
    });
  });
});
