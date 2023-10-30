import processCarNames from '../../src/utils/CarNameProcessor';

describe('CarNameProcessor 유틸리티', () => {
  describe('processCarNames 함수', () => {
    test('쉼표로 구분된 여러 이름을 배열로 반환해야 한다', () => {
      const input = 'pobi,woni,jun';
      const output = ['pobi', 'woni', 'jun'];
      expect(processCarNames(input)).toEqual(output);
    });

    test('이름에 공백이 있을 경우 공백을 제거해야 한다', () => {
      const input = 'pobi, woni, jun';
      const output = ['pobi', 'woni', 'jun'];
      expect(processCarNames(input)).toEqual(output);
    });

    test('입력 문자열이 빈 문자열인 경우 빈 배열을 반환해야 한다', () => {
      const input = '';
      const output = [''];
      expect(processCarNames(input)).toEqual(output);
    });
  });
});
