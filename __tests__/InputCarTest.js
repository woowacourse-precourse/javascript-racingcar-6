import validate, { Validation } from '../src/utils/validation';

describe('자동차 이름 입력 테스트', () => {
  // Success Test
  test('자동차 이름 1개', () => {
    const input = 'car1';
    const result = input.split(',');
    expect(result).toContain('car1');
  });

  test('자동차 이름 중복', () => {
    const input = 'car1,car1,car2';
    const result = input.split(',');
    expect(result).toContainEqual('car1', 'car1', 'car2');
  });

  test('split 메서드로 주어진 값을 구분', () => {
    const input = 'car1,car2';
    const result = input.split(',');

    expect(result).toContain('car2', 'car1');
    expect(result).toContainEqual('car1', 'car2');
  });

  // Error Test

  test('빈 값이 주어진 경우', () => {
    const input = '';
    const result = input.split(',');
    expect(validate.nameValidation(result)).rejects.toThrow('[ERROR]');
  });

  test('자동차 이름 5글자 초과', () => {
    const input = 'car2,car45,car65,car1234';
    const result = input.split(',');
    expect(validate.nameValidation(result)).rejects.toThrow('[ERROR]');
  });

  test('자동차 이름 띄어쓰기 포함', () => {
    const input = 'car1 ,car2,car3';
    const result = input.split(',');
    expect(validate.nameValidation(result)).rejects.toThrow('[ERROR]');
  });
});
