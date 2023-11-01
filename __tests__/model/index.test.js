import RacingModel from '../../src/model/index.js';
import Car from '../../src/model/Car.js';

describe('RacingModel', () => {
  let racingModel;

  beforeEach(() => {
    const car = new Car();
    racingModel = new RacingModel(car);
  });

  test('최종 승자는 1~3명이고 사용자가 입력한 이름 중에 있어야 한다.', () => {
    // given
    racingModel.saveNames('Vehicle1,Vehicle2,Vehicle3');
    racingModel.race();

    // when
    const finalWinner = racingModel.getFinalWinner();

    expect(finalWinner.length).toBeGreaterThanOrEqual(1);
    expect(finalWinner.length).toBeLessThanOrEqual(3);
    expect(finalWinner[0]).toMatch(/^Vehicle[1-3]$/);
  });
});
