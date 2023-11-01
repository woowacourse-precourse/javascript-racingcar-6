import { MissionUtils } from '@woowacourse/mission-utils';
import { getRaceresult, getWinners } from '../src/game/race';

const mockRandoms = numbers => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('기능 구현 함수 테스트', () => {
  test('최종 우승자 결과 확인', async () => {
    const cars = [
      {
        name: 'jay',
        distance: 2,
      },
      {
        name: 'amy',
        distance: 4,
      },
      {
        name: 'kei',
        distance: 4,
      },
    ];

    expect(getWinners(cars)).toEqual([
      {
        name: 'amy',
        distance: 4,
      },
      {
        name: 'kei',
        distance: 4,
      },
    ]);
  });

  test('랜덤값에 따른 올바른 distance 계산 확인', async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const randoms = [
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
    ];
    const roundNum = 3;
    const inputCars = [
      {
        name: 'jay',
        distance: 0,
      },
      {
        name: 'amy',
        distance: 0,
      },
      {
        name: 'kei',
        distance: 0,
      },
    ];

    mockRandoms([...randoms]);

    expect(getRaceresult(roundNum, inputCars)).toEqual([
      {
        name: 'jay',
        distance: 2,
      },
      {
        name: 'amy',
        distance: 0,
      },
      {
        name: 'kei',
        distance: 2,
      },
    ]);
  });
});
