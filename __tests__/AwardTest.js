import Victory from '../src/award.js';
import { MissionUtils } from '@woowacourse/mission-utils';

describe('최종 우승자 테스트', () => {
  it('should compare cars and return the winners', async () => {
    const cars = [
      { name: 'Car1', position: '---' },
      { name: 'Car2', position: '--' },
      { name: 'Car3', position: '----' },
    ];

    const victory = new Victory();
    const spy = jest.spyOn(MissionUtils.Console, 'print');

    await victory.compare(cars);
    expect(spy).toHaveBeenCalledWith('최종 우승자: Car3\n');
  });
});
