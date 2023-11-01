import CustomError from '../../src/errors/error';
import ERROR from '../../src/constants/error';

describe('CustomError 테스트', () => {
  test('에러 출력시 메시지는 [ERROR]로 시작해야 한다', () => {
    const testMessage = '테스트 에러 메시지';
    const error = new CustomError(testMessage);

    expect(error.message).toMatch(/^\[ERROR\]/);
  });

  test('InputView Error는 에러 이름을 가진다', () => {
    const testMessage = '입력 오류';
    const error = CustomError.InputView(testMessage);

    expect(error.name).toBe(ERROR.name.inputView);
    expect(error.message).toBe(`[ERROR] ${testMessage}`);
  });

  test('Car Error는 에러 이름을 가진다', () => {
    const testMessage = '자동차 오류';
    const error = CustomError.Car(testMessage);

    expect(error.name).toBe(ERROR.name.car);
  });

  test('RacingGame Error는 에러 이름을 가진다', () => {
    const testMessage = '게임 오류';
    const error = CustomError.RacingGame(testMessage);

    expect(error.name).toBe(ERROR.name.racingGame);
  });
});
