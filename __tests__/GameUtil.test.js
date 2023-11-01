import { CARS } from '../src/Constants';
import GameUtil from '../src/game/GameUtil';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('GameUtil 클래스의 메소드들의 테스트', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    CARS.length = 0;
  });

  test('splitInput메소드가 문자열을 ,를 기준으로 잘 나누는가', () => {
    // given
    const INPUT = 'cars1,cars2,cars3';
    // when
    const gameUtil = new GameUtil();
    // then
    expect(gameUtil.splitInput(INPUT)).toEqual(['cars1', 'cars2', 'cars3']);
  });

  test('storeMovingForward가 받은 index값을 가진 차가 전진하였음을 잘 저장하는가', () => {
    // given
    CARS.push({ carName: 'car1', forwardNumber: 0 });
    CARS.push({ carName: 'car2', forwardNumber: 0 });
    const INDEX = 0;
    const FORWARD = '4';
    mockRandoms([FORWARD]);
    // when
    const gameUtil = new GameUtil();
    gameUtil.storeMovingForward(INDEX);
    // then
    expect(CARS[0]).toEqual({ carName: 'car1', forwardNumber: 1 });
  });

  test('isMovingForward가 랜덤값에 따라 전진하였는지 멈추었는지의 boolean값을 잘 반환하는가', () => {
    // given
    const FORWARD = '4';
    const STOP = '3';
    mockRandoms([FORWARD, STOP]);
    // when
    const gameUtil = new GameUtil();
    //then
    expect(gameUtil.isMovingForward()).toBe(true);
    expect(gameUtil.isMovingForward()).toBe(false);
  });

  test('maxForwardNumber가 가장 큰 전진횟수를 반환할 수 있고, findCarsWithForwardNumber가 특정 전진횟수를 가진 차를 반환하는가', () => {
    // given
    CARS.push({ carName: 'car1', forwardNumber: 3 });
    CARS.push({ carName: 'car2', forwardNumber: 4 });
    CARS.push({ carName: 'car3', forwardNumber: 4 });
    // when
    const gameUtil = new GameUtil();
    // then
    expect(gameUtil.maxForwardNumber()).toBe(4);
    expect(gameUtil.findCarsWithForwardNumber(4)).toEqual([
      { carName: 'car2', forwardNumber: 4 },
      { carName: 'car3', forwardNumber: 4 },
    ]);
  });

  test('getSharedVictoryCarNames이 공동우승을 한 차의 이름들을 ,로 구분지어서 올바르게 반환하는가', () => {
    // given
    const WINNER_CARS = [];
    WINNER_CARS.push({ carName: 'car1', forwardNumber: 4 });
    WINNER_CARS.push({ carName: 'car2', forwardNumber: 4 });
    // when
    const gameUtil = new GameUtil();
    // then
    expect(gameUtil.getSharedVictoryCarNames(WINNER_CARS)).toBe('car1, car2');
  });
});
