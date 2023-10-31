import Result from '../src/Result';
import Car from '../src/Car';

describe('Result', () => {
  it('최종 우승자가 복수인 경우', () => {
    const pobi = new Car('pobi');
    const woni = new Car('woni');
    const jun = new Car('jun');

    pobi.result = '----';
    woni.result = '----';
    jun.result = '--';

    const cars = [pobi, woni, jun];
    const result = new Result(cars);

    result.findWinners();

    expect(result.max).toBe(4);
    expect(result.winners).toEqual(['pobi', 'woni']);

    const joinedWinners = result.joinWinners();
    expect(joinedWinners).toEqual('pobi,woni');
  });

  it('최종 우승자가 1명인 경우', () => {
    const pobi = new Car('pobi');
    const woni = new Car('woni');
    const jun = new Car('jun');

    pobi.result = '---';
    woni.result = '----';
    jun.result = '--';

    const cars = [pobi, woni, jun];
    const result = new Result(cars);

    result.findWinners();

    expect(result.max).toBe(4);
    expect(result.winners).toEqual(['woni']);

    const joinedWinners = result.joinWinners();
    expect(joinedWinners).toEqual('woni');
  });
});
