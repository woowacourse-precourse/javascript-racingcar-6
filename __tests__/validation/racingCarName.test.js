import { carNameInput } from '../../src/view/View.js';
import { MESSAGE_ERROR } from '../../src/constants/Message.js';

describe('레이싱카 이름 유효성 테스트', () => {
  describe('[이름이 긴 경우]', () => {
    it.each([
      { input: 'abcdef,abc', errorMessage: MESSAGE_ERROR.errorCarNameLength },
      { input: 'abc,def,ghijkl', errorMessage: MESSAGE_ERROR.errorCarNameLength },
    ])('에러 테스트', ({ input, errorMessage }) => {
      expect(() => carNameInput(input)).rejects.toThrow(errorMessage);
    });
  });
  describe('[이름이 중복된 경우]', () => {
    it.each([
      { input: 'abc,abc,abc,abc', errorMessage: MESSAGE_ERROR.errorCarNameDuplicate },
      { input: 'abc,def,abc,def', errorMessage: MESSAGE_ERROR.errorCarNameDuplicate },
    ])('에러 테스트', ({ input, errorMessage }) => {
      expect(() => carNameInput(input)).rejects.toThrow(errorMessage);
    });
  });
  describe('[이름이 유효하지 않는 경우]', () => {
    it.each([
      { input: 'abc,,b', errorMessage: MESSAGE_ERROR.errorCarNotValid },
      { input: 'abc, , ,ddd', errorMessage: MESSAGE_ERROR.errorCarNotValid },
    ])('에러 테스트', ({ input, errorMessage }) => {
      expect(() => carNameInput(input)).rejects.toThrow(errorMessage);
    });
  });
});
