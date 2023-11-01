import CustomError from '../../src/errors/error';
import ERROR from '../../src/constants/error';

describe('CustomError 테스트', () => {
  test('에러 출력시 메시지는 [ERROR]로 시작해야 한다', () => {
    const testMessage = '테스트 에러 메시지';
    const error = new CustomError(testMessage);

    expect(error.message).toMatch(/^\[ERROR\]/);
  });

  const errorCases = [
    { type: 'InputView', name: ERROR.name.inputView },
    { type: 'Car', name: ERROR.name.car },
    { type: 'RacingGame', name: ERROR.name.racingGame },
  ];

  errorCases.forEach(({ type, name }) => {
    test(`${type} Error는 올바른 이름을 가진다.`, () => {
      const testMessage = `${type} Error 테스트`;
      const error = CustomError[type](testMessage);

      expect(error.name).toBe(name);
    });

    test(`${type} Error는 올바른 형식으로 메시지를 출력한다.`, () => {
      const testMessage = `${type} Error 테스트`;
      const error = CustomError[type](testMessage);

      expect(error.message).toBe(`[ERROR] ${testMessage}`);
    });
  });
});
