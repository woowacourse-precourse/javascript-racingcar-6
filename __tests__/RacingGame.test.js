import RacingGame from '../src/lib/racingGame';
import { MissionUtils } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('레이싱 게임 테스트', () => {
  describe('차 이름 입력 테스트', () => {
    test('차 이름 정상적으로 입력된 경우 콤마로 구분하여 차 이름 반환', () => {
      // given
      const input = 'pobi,woni,jun';
      const output =
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)';
      const logSpy = getLogSpy();

      // when
      const racingGame = new RacingGame();
      const result = racingGame.readCarNames(input);

      // then
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      result.toEqual(['pobi', 'woni', 'jun']);
    });
    test('차 이름 5자 넘는 경우 오류', () => {
      // given
      const input = 'pobiii,woni,jun';
      const ERROR_MESSAGE = '[ERROR]';

      // when
      const racingGame = new RacingGame();
      const result = racingGame.readCarNames(input);

      // then
      expect(result).rejects.toThrow(ERROR_MESSAGE);
    });
  });
  describe('시도 횟수 입력 테스트', () => {
    test('시도 횟수 숫자가 입력될 경우, 숫자 반환', () => {});
    test('시도 횟수 숫자가 아닌 문자 입력될 경우, 에러 반환', () => {});
  });
  describe('실행결과 표시 테스트', () => {
    test('실행결과 표시', () => {});
  });
  describe('최종 우승자 표시 테스트', () => {
    test('한 명일 때 한 명 출력', () => {});
    test('여러 명일 때 여러 명 출력', () => {});
  });
});
