import { Random } from '@woowacourse/mission-utils';
import CarRacingController from '../src/controller/CarRacingController.js';
import driveAndStopCars from '../src/utils/driveAndStopCars.js';
import findWinners from '../src/utils/findWinners.js';

const mockRandoms = numbers => {
  Random.pickNumberInRange = jest.fn();
  numbers.map(number => Random.pickNumberInRange.mockReturnValueOnce(number));
};

describe('레이싱 게임 테스트', () => {
  test('자동차 입력에 따른 Car 클래스 인스턴스 생성', () => {
    const input = 'pobi, kang';
    const receivedValue = [
      { name: 'pobi', status: [] },
      { name: 'kang', status: [] },
    ];
    const expectedValue = [];

    const carRacingController = new CarRacingController();
    const carInstances = carRacingController.createCarInstances(input);

    carInstances.map(car => expectedValue.push({ name: car.getName(), status: car.getStatus() }));

    expect(receivedValue).toEqual(expectedValue);
  });

  test('사용자가 입력한 횟수만큼 자동차의 전진상태를 출력하는 기능', () => {
    const randoms = [1, 5, 2, 7, 3, 1];
    mockRandoms(randoms);

    const input = 'pobi, kang';
    const count = 3;
    let receivedValue;
    const expectedValue = ['pobi : ', 'kang : --'];

    const carRacingController = new CarRacingController();
    const carInstances = carRacingController.createCarInstances(input);

    for (let i = 0; i < count; i++) {
      receivedValue = carInstances.map(car => driveAndStopCars(car));
    }

    expect(receivedValue).toStrictEqual(expectedValue);
  });

  test('최종 우승자를 가려내는 기능', () => {
    const randoms = [1, 5, 2, 7, 3, 1];
    mockRandoms(randoms);

    const input = 'pobi, kang';
    const count = 3;

    const expectedValue = ['kang'];

    const carRacingController = new CarRacingController();
    const carInstances = carRacingController.createCarInstances(input);

    for (let i = 0; i < count; i++) {
      carInstances.map(car => driveAndStopCars(car));
    }

    const receivedValue = findWinners(carInstances);

    expect(receivedValue).toStrictEqual(expectedValue);
  });
});
