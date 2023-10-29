import validate from '../src/game/validation.js';

describe('유효성 검사 테스트', () => {
  describe('이름 입력 테스트 확인', () => {
    test('이름 입력으로 5자리 이상으로 들어오면 [ERROR]을 던진다', () => {
      const nameArray = ['한글자이상', '다섯글자이상'];
      expect(() => validate.carName(nameArray)).toThrowError('[ERROR] 입력은 최대 5자입니다.');
    });
  });

  describe('실행 횟수 입력 테스트 확인', () => {
    test('실행 횟수 입력으로 0이 들어오면 [ERROR]를 던진다.', () => {
      expect(() => validate.lapLength('0')).toThrowError('[ERROR] 1-9 사이에 숫자를 입력해주세요.');
    });

    test('실행 횟수 입력으로 3자리 수가 들어오면 [ERROR]를 던진다.', () => {
      expect(() => validate.lapLength('111')).toThrowError('[ERROR] 최대 2자리 수까지 입력이 가능합니다.');
    });
  });
});
