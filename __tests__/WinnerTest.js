import Winner from '../src/Winner';

describe('우승자 판별 테스트', () => {
  test('전진 횟수가 가장 큰 자동차 찾기', () => {
    const cars = ['blue', 'red', 'black'];
    const allForwardResult = ['---', '-', '--'];
    const winner = new Winner();

    const logSpy = jest.spyOn(console, 'log');
    winner.finalWinner(cars, allForwardResult);

    expect(logSpy).toHaveBeenCalledWith('최종 우승자 : blue');
  });
});
