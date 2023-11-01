import validate from '../src/game/validation.js';

describe('story3. 유효성 검사 테스트', () => {
  describe('이름 입력 테스트 확인', () => {
    test('입력으로 5자리 이상으로 들어오면 [ERROR]을 던진다', () => {
      const nameArray = ['To', '우테코 선생님들'];
      expect(() => validate.carName(nameArray)).toThrowError('[ERROR] 입력은 최대 5자입니다.');
    });

    test('입력으로 빈문자가 들어올 경우 [ERROR]을 던진다', () => {
      const nameArray = ['안녕하세요', ''];
      expect(() => validate.carName(nameArray)).toThrowError('[ERROR] 한자리 이상의 이름을 입력해주세요.');
    });

    test('입력으로 undefinded가 들어오면 [ERROR]을 던진다', () => {
      const nameArray = [undefined, '우테코 선생님들'];
      expect(() => validate.carName(nameArray)).toThrowError('[ERROR] 문자열을 입력해주세요.');
    });

    test('입력으로 null이 들어오면 [ERROR]을 던진다', () => {
      const nameArray = [null, '프리코스 모두 힘내봅시다', '화이팅입니다!!'];
      expect(() => validate.carName(nameArray)).toThrowError('[ERROR] 문자열을 입력해주세요.');
    });

    test('자동차 수는 한자리수 이상을 초과하지 않는다.', () => {
      const nameArray = ['감','사','의','마','음','을','담','아','테스트를','작성','합니다','.'];
      expect(() => validate.carName(nameArray)).toThrowError('[ERROR] 자동차는 9대까지 등록가능합니다.');
    });

    test('공백만으로 이루어진 입력이 있으면 [ERROR]를 던진다.', () => {
      const nameArray = [' ', '   '];
      expect(() => validate.carName(nameArray)).toThrowError('[EEROR] 최소 한개 이상은 입력해주세요.');
    });
  });

  describe('실행 횟수 입력 테스트 확인', () => {
    test('입력으로 0이 들어오면 [ERROR]를 던진다.', () => {
      expect(() => validate.lapLength('0')).toThrowError('[ERROR] 1-9 사이에 숫자를 입력해주세요.');
    });

    test('입력으로 음수가 들어오면 [ERROR]를 던진다.', () => {
      expect(() => validate.lapLength('-7')).toThrowError('[ERROR] 1-9 사이에 숫자를 입력해주세요.');
    });

    test('입력으로 3자리 수 이상이 들어오면 [ERROR]를 던진다.', () => {
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
