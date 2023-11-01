import { Console } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import { CAR, VALIDATION_ERRORS_MESSAGE } from '../src/Constants.js';

describe('App', () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  test('자동차 이름에 대한 예외 처리', () => {
    // 유효한 자동차 이름 테스트
    expect(() => app.validateCarName('pobi')).not.toThrow();
    expect(() => app.validateCarName('won')).not.toThrow();

    // 유효하지 않은 자동차 이름 테스트
    expect(() => app.validateCarName('p0bi')).toThrowError(
      VALIDATION_ERRORS_MESSAGE.NOT_ONLY_STRING,
    );
    expect(() => app.validateCarName('')).toThrowError(
      VALIDATION_ERRORS_MESSAGE.EMPTY_INPUT,
    );
    expect(() => app.validateCarName('banana')).toThrowError(
      VALIDATION_ERRORS_MESSAGE.OVER_THE_RANGE,
    );
  });

  test('게임 횟수 예외 처리', () => {
    // 유효한 게임 횟수 테스트
    expect(() => app.validateGameCount('5')).not.toThrow();

    // 유효하지 않은 게임 횟수 테스트
    expect(() => app.validateGameCount('ten')).toThrowError(
      VALIDATION_ERRORS_MESSAGE.NOT_NUMBER,
    );
    expect(() => app.validateGameCount('2nine')).toThrowError(
      VALIDATION_ERRORS_MESSAGE.NOT_NUMBER,
    );
    expect(() => app.validateGameCount('')).toThrowError(
      VALIDATION_ERRORS_MESSAGE.EMPTY_INPUT,
    );
  });

  test('자동차가 전진 또는 정지', () => {
    // moveOrStop 메서드가 CAR.MOVING_FORWARD를 반환해야 하는 경우를 테스트
    jest.spyOn(Math, 'random').mockReturnValue(0.6);
    expect(app.moveOrStop()).toBe(CAR.MOVING_FORWARD);

    // moveOrStop 메서드가 CAR.STOP을 반환해야 하는 경우를 테스트
    jest.spyOn(Math, 'random').mockReturnValue(0.3);
    expect(app.moveOrStop()).toBe(CAR.STOP);
  });

  test('우승자 가리기', () => {
    const gameProgress = {
      pobi: '-----',
      won: '------',
      john: '---',
    };

    const logSpy = jest.spyOn(Console, 'print');
    app.chooseWinner(gameProgress);

    expect(logSpy).toHaveBeenCalledWith('최종우승자 : won');
  });

  // 비동기 메서드를 테스트
  test('자동차 이름을 비동기적으로 가져오는지 테스트', async () => {
    const mockReadLineAsync = jest.spyOn(Console, 'readLineAsync');
    mockReadLineAsync.mockResolvedValue('pobi,won');

    const carNames = await app.getCarNames();
    expect(carNames).toEqual(['pobi', 'won']);
  });
});
