import RacingGame from '../src/lib/racingGame';

describe('레이싱 게임 테스트', () => {
  let racingGame;

  beforeAll(() => {
    racingGame = new RacingGame();
  });

  describe('차 이름 입력 테스트', () => {
    test('차 이름 정상적으로 입력된 경우 콤마로 구분하여 차 이름 반환', () => {
      const result = racingGame.readCarNames('pobi,woni,jun');
      result.toEqual(['pobi', 'woni', 'jun']);
    });
    test('차 이름 5자 넘는 경우 오류', () => {
      expect(racingGame.readCarNames('pobiii,woni,jun')).rejects.toThrow(
        '[ERROR]'
      );
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
