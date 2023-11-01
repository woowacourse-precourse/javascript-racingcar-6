import { MissionUtils } from '@woowacourse/mission-utils';
import CarService from '../../src/services/carService';
import GAME_OPTION from '../../src/constants/gameOption';

describe('carService 테스트', () => {
  let carService;

  beforeEach(() => {
    carService = new CarService();
  });

  test('초기 자동차 리스트는 비어있다', () => {
    const carList = carService.getCarList();

    expect(carList).toHaveLength(0);
  });

  test('자동차 리스트에 자동차를 추가할 수 있다', () => {
    const input = 'lys';

    carService.addCar(input);
    const carList = carService.getCarList();

    expect(carList).toHaveLength(1);
  });

  test('자동차 리스트에는 자동차 이름과 전진한 숫자가 포함되어 있다', () => {
    const input = 'lys';

    carService.addCar(input);
    const carList = carService.getCarList();

    expect(carList).toEqual([{ carName: 'lys', forwardCount: 0 }]);
  });

  test(`0에서 9 사이의 무작위 값이 ${GAME_OPTION.forwardConditionTo} 이상이면 자동차를 전진시킨다`, () => {
    MissionUtils.Random.pickNumberInRange = jest
      .fn()
      .mockReturnValue(GAME_OPTION.forwardConditionTo);

    const input = 'lys';

    carService.addCar(input);
    carService.race();
    const carList = carService.getCarList();

    expect(carList).toEqual([{ carName: 'lys', forwardCount: 1 }]);
  });

  test(`0에서 9 사이의 무작위 값이 ${GAME_OPTION.forwardConditionTo} 미만이면 자동차를 멈춘다`, () => {
    MissionUtils.Random.pickNumberInRange = jest
      .fn()
      .mockReturnValue(GAME_OPTION.forwardConditionTo - 1);

    const input = 'lys';

    carService.addCar(input);
    carService.race();
    const carList = carService.getCarList();

    expect(carList).toEqual([{ carName: 'lys', forwardCount: 0 }]);
  });

  test('우승자는 한 명일 수 있다', () => {
    MissionUtils.Random.pickNumberInRange = jest
      .fn()
      .mockReturnValue(GAME_OPTION.forwardConditionTo);

    const input = 'lys';

    carService.addCar(input);
    carService.race();

    const winnerList = carService.getWinnerList();

    expect(winnerList).toEqual(['lys']);
  });

  test('우승자는 여러 명일 수 있다', () => {
    MissionUtils.Random.pickNumberInRange = jest
      .fn()
      .mockReturnValue(GAME_OPTION.forwardConditionTo);

    const inputs = ['lys', 'lyss'];

    inputs.forEach((input) => {
      carService.addCar(input);
    });
    carService.race();
    const winnerList = carService.getWinnerList();

    expect(winnerList).toEqual(['lys', 'lyss']);
  });
});
