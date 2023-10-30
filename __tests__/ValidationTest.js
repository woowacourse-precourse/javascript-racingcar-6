import validate from '../src/game/validation.js';

describe('유효성 검사 테스트', () => {
  describe('이름 입력 테스트 확인', () => {
    test('입력으로 5자리 이상으로 들어오면 [ERROR]을 던진다', () => {
      const nameArray = ['좋아합니다', '우테코,감사합니다.'];
      expect(() => validate.carName(nameArray)).toThrowError('[ERROR] 입력은 최대 5자입니다.');
    });

    test('입력으로 1자리 이하일 경우 [ERROR]을 던진다', () => {
      const nameArray = ['TO', '우테코', ''];
      expect(() => validate.carName(nameArray)).toThrowError('[ERROR] 한자리 이상의 이름을 입력해주세요.');
    });

    test('입력으로 undefinded가 들어오면 [ERROR]을 던진다', () => {
      const nameArray = [undefined, '이렇게 좋은 배움의 기회를 주셔서'];
      expect(() => validate.carName(nameArray)).toThrowError('[ERROR] 문자열을 입력해주세요.');
    });

    test('입력으로 null이 들어오면 [ERROR]을 던진다', () => {
      const nameArray = [null, '감사하게', '생각하고 있습니다.'];
      expect(() => validate.carName(nameArray)).toThrowError('[ERROR] 문자열을 입력해주세요.');
    });

    test('자동차 수는 9대 이상을 넘어가지 않는다.', () => {
      const nameArray = ['감','사','의','마','음','을','담','아','테스트를','작성','합니다','.'];
      expect(() => validate.carName(nameArray)).toThrowError('[ERROR] 자동차는 9대까지 등록가능합니다.');
    });
  });

  describe('실행 횟수 입력 테스트 확인', () => {
    test('입력으로 0이 들어오면 [ERROR]를 던진다.', () => {
      expect(() => validate.lapLength('0')).toThrowError('[ERROR] 1-9 사이에 숫자를 입력해주세요.');
    });

    test('입력으로 3자리 수가 들어오면 [ERROR]를 던진다.', () => {
      expect(() => validate.lapLength('111')).toThrowError('[ERROR] 최대 2자리 수까지 입력이 가능합니다.');
    });

    test('입력으로 undefined가 들어오면 [ERROR]를 던진다.', () => {
      expect(() => validate.lapLength(undefined)).toThrowError('[ERROR] 숫자를 정확히 입력해주세요.');
    });

    test('입력으로 null이 들어오면 [ERROR]를 던진다.', () => {
      expect(() => validate.lapLength(null)).toThrowError('[ERROR] 숫자를 정확히 입력해주세요.');
    });
  });
});
