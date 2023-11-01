import CarMoving from '../src/model/CarMoving.js';

describe('자동차 랜덤 이동값 테스트', () => {
  const carMoving = new CarMoving();

  test('자동차 랜덤값이 4 미만일 경우 전진하지 않음', () => {
    const failRandomValue = [0, 1, 2, 3];

    failRandomValue.forEach((number) => {
      expect(() => carMoving.checkRandomNumber(number).toEqual(0));
    });
  });

  test('자동차 랜덤값이 4 이상일 때만 전진', () => {
    const succesRandomValue = [4, 5, 6, 7, 8, 9];

    succesRandomValue.forEach((number) => {
      expect(() => carMoving.checkRandomNumber(number).toEqual(number));
    });
  });

  test('각 레이싱 별 우승자 계산(한 명일 경우)', () => {
    const singleWinner = [0, 8, 9];
    const winnerIndex = [2];

    expect(() => carMoving.countWinnerIndex(singleWinner).toEqual(winnerIndex));
  });

  test('각 레이싱 별 우승자 계산(여러명인 경우)', () => {
    const doubleWinndr = [0, 5, 5];
    const winnerIndex = [1, 2];

    expect(() => carMoving.countWinnerIndex(doubleWinndr).toEqual(winnerIndex));
  });
});
