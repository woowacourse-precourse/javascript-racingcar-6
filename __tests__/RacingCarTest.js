import RacingCar from '../src/RacingCar';
import {MissionUtils} from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};
const carNamesArray = ['car1', 'car2', 'car3', 'car4'];
const racingCar = new RacingCar(carNamesArray);

describe('RacingCar클래스 테스트', () => {
  test('Car 인스턴스 생성 테스트', () => {
    expect(racingCar.cars.length).toEqual(carNamesArray.length);
  });
  test('각 Car 인스턴스의 이동 이력 출력 테스트', () => {
    const randoms = [4, 4, 4, 4, 4, 3, 3, 3];
    const expectedResult =
      '\n실행 결과\ncar1 : -\ncar2 : -\ncar3 : -\ncar4 : -\n\ncar1 : --\ncar2 : -\ncar3 : -\ncar4 : -\n';
    mockRandoms([...randoms]);
    racingCar.tryProgress(2);

    expect(racingCar.getTotalProgressStatus()).toEqual(expectedResult);
  });
});
