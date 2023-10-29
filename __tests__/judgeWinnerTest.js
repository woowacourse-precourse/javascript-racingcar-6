import { judgeWinner } from '../src/racingCars/playGame.js';
describe('judgeWinner 함수 테스트.', () => {
  test('우승자는 한 명 이상일 수 있고, 여러 명일 경우 쉼표(,)를 이용하여 구분한다.', () => {
    const carList = {
      테슬라: 2,
      자전거: 2,
    };
    expect(judgeWinner(carList)).toBe('테슬라,자전거');
  });
});
