import Computer from '../src/Computer.js';

describe('컴퓨터 예외 처리 테스트', () => {
  test.each([',car', 'car,', ',car,'])(
    '문장의 맨 앞이나 뒤에 ,를 입력할 경우 예외 처리',
    (inputs) => {
      expect(() => Computer.getCarNameArrayFromString(inputs)).toThrow(
        '[ERROR]',
      );
    },
  );

  test('이름이 5자 초과인 차 이름을 입력하는 경우 예외 처리', () => {
    expect(() => Computer.getCarNameArrayFromString('longcar, car')).toThrow(
      '[ERROR]',
    );
  });

  test('차 이름을 올바르게 입력한 경우 배열 반환', () => {
    expect(Computer.getCarNameArrayFromString('carA, carB, carC')).toEqual([
      'carA',
      'carB',
      'carC',
    ]);
  });

  test('숫자 이외의 문자를 입력한 경우 예외 처리', () => {
    expect(() => Computer.getTrialNumberFromString('abc')).toThrow('[ERROR]');
  });

  test('숫자를 올바르게 입력한 경우 숫자 반환', () => {
    expect(Computer.getTrialNumberFromString('10')).toEqual(10);
  });
});
