import CarRace from '../src/domain/CarRace';
import { mockRandoms } from './ApplicationTest';

describe('자동차 경주 테스트', () => {
  const names = ['aaa', 'bb', 'c'];
  const round = 3;
  const carRace = new CarRace(names, round);

  const randoms = [4, 3, 4, 5, 2, 5, 6, 1, 6];
  mockRandoms(randoms);

  while (carRace.isPlaying()) {
    carRace.calculateResult();
  }

  test('시도할 횟수가 0 미만이면 false를 반환해야 한다.', () => {
    const round = carRace.isPlaying();
    expect(round).toBeFalsy();
  });

  test('가장 많이 전진한 우승자 배열을 반환해야 한다.', () => {
    const answer = ['aaa', 'c'];
    const winner = carRace.getWinner();

    expect(winner).toStrictEqual(answer);
  });
});