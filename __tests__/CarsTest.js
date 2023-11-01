import { Random } from '@woowacourse/mission-utils';
import Cars from '../src/Cars.js';

describe('Cars 클래스', () => {
  let cars;
  let consoleSpy;
  let randomSpy;

  beforeEach(() => {
    cars = new Cars({ initialState: ['phobi', 'daeun'] });
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    randomSpy = jest.spyOn(Random, 'pickNumberInRange').mockReturnValue(4);
  });

  afterEach(() => {
    consoleSpy.mockRestore();
    randomSpy.mockRestore();
  });

  test("'viewCurrentState' 메소드가 정상적으로 실행되는지 테스트", () => {
    cars.viewCurrentState();
    expect(consoleSpy).toHaveBeenCalledWith('phobi : ');
    expect(consoleSpy).toHaveBeenCalledWith('daeun : ');
  });

  test("'raceResult' 메소드가 정상적으로 실행되는지 테스트", () => {
    cars.race(3);
    cars.raceResult();
    expect(consoleSpy).toHaveBeenCalledWith('최종 우승자: phobi, daeun');
  });

  test("'race' 메소드가 정상적으로 실행되는지 테스트", () => {
    cars.race(3);

    expect(cars.state[0].state.position).toBeGreaterThanOrEqual(0);
    expect(cars.state[0].state.position).toBeLessThanOrEqual(3);
    expect(cars.state[1].state.position).toBeGreaterThanOrEqual(0);
    expect(cars.state[1].state.position).toBeLessThanOrEqual(3);
  });

  test("'forward' 메소드가 정상적으로 실행되는지 테스트", () => {
    cars.forward();

    expect(cars.state[0].state.position).toBeGreaterThanOrEqual(0);
    expect(cars.state[1].state.position).toBeGreaterThanOrEqual(0);
  });

  test("'validationState' 메소드가 정상적으로 동작하는지 테스트", () => {
    expect(() => {
      new Cars({ initialState: ['qwewqdaa'] });
    }).toThrow('[ERROR] 이름이 잘못된 형식입니다.');
  });
});
