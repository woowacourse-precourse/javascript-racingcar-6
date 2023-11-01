import { validation } from '../src/validation.js';

describe('사용자의 입력값 검증', () => {
  it('자동차 이름은 쉽표로 구분되어야 한다.', () => {
    expect(() => {
      validation.isValidNameFormat('car1/car2');
    }).toThrowError('[ERROR] 이름은 쉼표로 구분되어야 합니다.');
  });

  it('자동차 이름은 최대 5자 까지 허용됩니다.', () => {
    expect(() => {
      validation.isValidNamesArray(['car1', 'car2car3']);
    }).toThrowError('[ERROR] 이름은 5자를 넘을 수 없습니다');
  });

  it('자동차 이름은 최소 2개 이상 입력 해 주세요.', () => {
    expect(() => {
      validation.isValidNamesArray(['car1']);
    }).toThrowError('[ERROR] 자동차 이름은 최소 2개 이상 입력해주세요.');
  });

  it('시도 횟수 입력값은 문자일 수 없다', () => {
    expect(() => {
      validation.isValidNumberOfTimesFormat('notanumber');
    }).toThrowError('[ERROR] 유효한 숫자 형식이 아닙니다.');
  });

  it('시도 횟수 입력값은 음수 일 수 없다.', () => {
    expect(() => {
      validation.isValidNumberOfTimesFormat(-1);
    }).toThrowError('[ERROR] 유효한 숫자 형식이 아닙니다.');
  });
});
