import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../src/Car.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};


describe('자동차 게임:자동차 테스트',()=>{

  test("자동차 이름",()=>{
    const name ="pobi";
    const car = new Car(name);
    expect(car.name).toBe(name);
  });

  test("자동차 전진",()=>{
    const car = new Car("pobi");
    mockRandoms([3]);
    car.handleMovement();
    expect(car.movement.length).toBe(0);
    mockRandoms([4]);
    car.handleMovement();
    expect(car.movement.length).toBe(1);
  });
});