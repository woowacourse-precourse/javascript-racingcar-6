import Car from '../src/models/Car.js';

describe('Car', () => {
  test('자동차 이름 String을 value = 0 초기화한 Map으로 변환', () => {
    const carMap = new Car();
    const carNames = 'a,b,c';

    const result = carMap.convertStringToMap(carNames);

    expect(result).toBeInstanceOf(Map);
    expect(result.size).toBe(3);
    expect(Array.from(result.values())).toEqual([0, 0, 0]);
  });
});
