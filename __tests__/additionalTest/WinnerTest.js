import selectWinner from '../../src/game/Winner.js';
import { printWinner } from '../../src/utils/Output.js';

jest.mock('../../src/utils/Output.js', () => ({
  printWinner: jest.fn(),
}));

describe('우승자 선정', () => {
  let carsPosition;

  // 테스트 전 초기화
  beforeEach(() => {
    carsPosition = {
      car1: 5,
      car2: 3,
      car3: 5,
      car4: 2,
    };
  });

  // 테스트 이후 모든 호출된 모의 함수 초기화
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('가장 많이간 차량 = 승자', () => {
    selectWinner(carsPosition);
    expect(printWinner).toHaveBeenCalledWith(['car1', 'car3']);
  });

  test('위치가 모두 0일 때 승자가 없어야 합니다', () => {
    carsPosition = {
      car1: 0,
      car2: 0,
      car3: 0,
      car4: 0,
    };
    selectWinner(carsPosition);
    expect(printWinner).toHaveBeenCalledWith([]);
  });
});
