import { MissionUtils } from '@woowacourse/mission-utils';
import Race from '../src/RacingCarGame/Race/index.js';
import Car from '../src/RacingCarGame/Car/index.js';
import { SYMBOLS } from '../src/RacingCarGame/constants/message.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

const getLogSpyOf = (instance, method) => {
  const logSpy = jest.spyOn(instance, method);
  logSpy.mockClear();
  return logSpy;
};

describe('Race 클래스 테스트', () => {
  let race;

  beforeEach(() => {
    race = new Race();
  });

  it('인스턴스의 시도 횟수를 할당하는 setLapCount 함수를 테스트한다.', () => {
    const lapCount = 10;
    race.setLapCount(lapCount);

    expect(race.lapCount).toBe(lapCount);
  });

  it('cars 배열을 초기화하는 addCars 함수가 cars 배열을 초기화하는지 테스트한다.', () => {
    const nameArr = ['alpha,beta,omega', 'alpha,beta,', 'alpha'];
    const lengths = [3, 2, 1];
    const logSpy = getLogSpyOf(race, 'addCars');

    nameArr.forEach((names, index) => {
      race.addCars(names);
      expect(race.cars.length).toBe(lengths[index]);
    });

    expect(logSpy).toHaveBeenCalledTimes(nameArr.length);
  });

  it('cars 배열을 초기화하는 addCars 함수가 Car 인스턴스로 이뤄진 배열을 생성하는지 테스트한다.', () => {
    const nameArr = ['alpha,beta,omega', 'alpha,beta,', 'alpha'];

    nameArr.forEach((names) => {
      race.addCars(names);
      race.cars.forEach((car) => {
        expect(car instanceof Car).toBeTruthy();
      });
    });
  });

  it('각 Car 인스턴스에게 전진을 지시하는 lap 함수를 테스트한다.', () => {
    const name = 'alpha';
    const nums = [5];

    mockRandoms(nums);

    race.addCars(name);
    const initialPositions = race.cars.map((car) => car.formatPosition());
    race.lap();
    const finalPositions = race.cars.map((car) => car.formatPosition());

    expect(finalPositions).not.toEqual(initialPositions);
  });

  it('각 Car 인스턴스의 전진 결과를 반환하는 logLap 함수를 테스트한다.', () => {
    const name = 'alpha';
    const outputs = [name, SYMBOLS.colon, SYMBOLS.move];
    const nums = [5];

    mockRandoms(nums);

    race.addCars(name);
    race.lap();

    outputs.forEach((output) => {
      expect(race.logLap()).toContain(output);
    });
  });

  it('모든 Car 인스턴스의 전진 결과를 문자열로 포맷팅하여 반환하는 formatResult 함수를 테스트한다.', () => {
    const name = 'alpha,omega';
    const outputs = ['alpha : -', 'omega : '];
    const nums = [5, 3];
    const lapCount = 1;

    mockRandoms(nums);

    race.setLapCount(lapCount);
    race.addCars(name);
    race.lap();

    const resultString = race.formatResult();

    outputs.forEach((output) => {
      expect(resultString).toContain(output);
    });
  });

  it('최종 우승자가 1명인 경우의 electWinner 함수를 테스트한다.', () => {
    const name = 'alpha,beta,omega';
    const outputs = ['alpha'];
    const nums = [5, 3, 4, 6, 4, 2];
    const lapCount = 2;

    mockRandoms(nums);

    race.addCars(name);

    for (let i = 0; i < lapCount; i++) {
      race.lap();
    }

    const winnerString = race.electWinner();

    outputs.forEach((output) => {
      expect(winnerString).toContain(output);
    });
  });

  it('최종 우승자가 여러명인 경우의 electWinner 함수를 테스트한다.', () => {
    const name = 'alpha,beta,omega';
    const outputs = ['alpha', 'beta', SYMBOLS.winnerDivider];
    const nums = [5, 5, 4, 6, 4, 2];
    const lapCount = 2;

    mockRandoms(nums);

    race.addCars(name);

    for (let i = 0; i < lapCount; i++) {
      race.lap();
    }

    const winnerString = race.electWinner();

    outputs.forEach((output) => {
      expect(winnerString).toContain(output);
    });
  });
});
