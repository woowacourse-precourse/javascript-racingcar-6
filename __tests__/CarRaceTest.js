import { MissionUtils } from '@woowacourse/mission-utils';
import CarRace from '../src/models/CarRace';
import Car from '../src/models/Car';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), MissionUtils.Random.pickNumberInRange);
};

describe('CarRace 클래스 기능 테스트', () => {
  // given
  let carRace;
  let raceCars;

  beforeEach(() => {
    // given
    const testCars = ['woong', 'gang', 'coco'].map((carName) => new Car(carName));

    // when
    carRace = new CarRace(testCars);
    raceCars = carRace.getRaceCars();
  });

  test('인스턴스를 정상적으로 생성', () => {
    // then
    expect(carRace).toBeInstanceOf(CarRace);

    raceCars.forEach((car) => {
      expect(car).toBeInstanceOf(Car);
    });
  });

  test('runQuarter 메서드는 랜덤 숫자가 4이상인 경우에만 자동차 위치를 변경', () => {
    // given
    const randoms = [6, 3, 9];
    const expectedPositions = [1, 0, 1];

    mockRandoms([...randoms]);

    // when
    carRace.runQuarter();
    const positions = raceCars.map((car) => car.getCarPosition());

    // then
    expect(positions).toEqual(expectedPositions);
  });

  test('getWinners 메서드는 우승자가 1명인 경우 1명만 반환', () => {
    // given
    const quarterOneRandoms = [6, 3, 9];
    const quarterTwoRandoms = [3, 3, 9];
    const expectedWinner = 'coco';

    mockRandoms([...quarterOneRandoms, ...quarterTwoRandoms]);

    // when
    carRace.runQuarter();
    carRace.runQuarter();

    const raceWinners = carRace.findRaceWinners();

    // then
    expect(raceWinners).toBe(expectedWinner);
  });

  test('getWinners 메서드는 우승자가 2명인 경우 2명 모두 반환', () => {
    // given
    const quarterOneRandoms = [7, 8, 3];
    const quarterTwoRandoms = [9, 6, 7];
    const expectedWinners = ['woong', 'gang'];

    mockRandoms([...quarterOneRandoms, ...quarterTwoRandoms]);

    // when
    carRace.runQuarter();
    carRace.runQuarter();

    const raceWinners = carRace.findRaceWinners();

    // then
    expectedWinners.forEach((winner) => {
      expect(raceWinners).toContain(winner);
    });
  });
});
