import playOneRound from '../../src/functions/startRacing/playOneRound';

describe('playOneRound 함수 테스트', () => {
  test('이전 라운드보다 0칸 이상 전진 해야함', () => {
    // given
    const prevRoundResult = {
      car1: 1,
      car2: 1,
      car3: 2,
    };

    // when
    const nextRoundResult = playOneRound(prevRoundResult);

    // then
    Object.entries(nextRoundResult).forEach(([car, nextValue]) => {
      const prevValue = prevRoundResult[car];
      expect(nextValue).toBeGreaterThanOrEqual(prevValue);
    });
  });
});
