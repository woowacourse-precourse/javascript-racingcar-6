import RacingCar from '../src/RacingCar';
import { MissionUtils } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('RacingCar', () => {
  test('name, position 필드 확인', () => {
    // given
    const name1 = 'pobi';
    const name2 = 'woni';

    // when
    const pobiCar = new RacingCar(name1);
    const woniCar = new RacingCar(name2);

    // then
    expect(pobiCar.name).toBe('pobi');
    expect(pobiCar.position).toBe(0);

    expect(woniCar.name).toBe('woni');
    expect(woniCar.position).toBe(0);
  });

  test('move 함수 동작 확인', () => {
    // given
    const name1 = 'pobi';
    const name2 = 'woni';
    MissionUtils.Random.pickNumberInRange = jest
      .fn()
      .mockReturnValue(4)
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(3);

    // when
    const pobiCar = new RacingCar(name1);
    pobiCar.move();
    pobiCar.move();
    pobiCar.move();
    pobiCar.move();

    const woniCar = new RacingCar(name2);
    woniCar.move();
    woniCar.move();

    // then
    expect(pobiCar.position).toBe(0);
    expect(woniCar.position).toBe(2);
  });

  test('printPosition 함수 동작 확인', () => {
    // given
    const output = 'pobi : -';
    const name1 = 'pobi';
    const logSpy = getLogSpy();
    MissionUtils.Random.pickNumberInRange = jest.fn().mockReturnValue(4);

    // when
    const pobiCar = new RacingCar(name1);
    pobiCar.move();
    pobiCar.printPosition();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});
