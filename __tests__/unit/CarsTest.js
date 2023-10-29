import Cars from "../../src/Cars";

const INPUTS = ['pobi', 'navi', 'gori'];

describe('자동차 객체는', () => {
  const cars = new Cars(INPUTS);

  test('생성된 이름의 갯수만큼의 크기를 지니는가?', () => {
    const carsNameSize = cars.getNames.length
    expect(carsNameSize).toBe(INPUTS.length);
  });

  test('거리를 키로 갖는 오브젝트를 지니고 있는가?', () => {
    cars.getNames.forEach((name) => {
      const namedCar = cars.getDistanceByName(name);
      expect(namedCar.distance).toBeDefined();
    });
  });

  test('거리의 업데이트가 가능한가?', () => {
    const EXPECTED_DISTANCE = 1;

    INPUTS.forEach((name) => {
      cars.movingForwardByName(name);
      const { distance } = cars.getDistanceByName(name);
      expect(distance === EXPECTED_DISTANCE).toBeTruthy();
    });
  });

  test('특정 이름의 거리만 업데이트가 가능한가?', () => {
    cars.movingForwardByName('pobi');

    const case1 = cars.getDistanceByName('navi');
    const case2 = cars.getDistanceByName('pobi');
    expect(case1.distance !== case2.distance).toBeTruthy();
  });
});
