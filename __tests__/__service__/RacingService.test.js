import { MissionUtils } from '@woowacourse/mission-utils';

import RacingService from '../../src/service/RacingService';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

describe('RacingService 테스트', () => {
  it('`getResult()`를 호출시 `Track`을 종료시 까지 진행하고 결과와 우승자를 반환합니다.', () => {
    mockRandoms([4, 3, 5, 7, 2, 2]);
    const result = RacingService.getResult(['james', 'john'], 3);

    expect(result).toEqual({
      winners: ['james'],
      records: [
        {
          james: '-',
          john: '',
        },
        {
          james: '--',
          john: '-',
        },
        {
          james: '--',
          john: '-',
        },
      ],
    });
  });
});
