
describe('자동차 객체는', () => {

  test('생성된 이름의 갯수만큼의 크기를 지니는가?', () => {
  });

  test('거리를 키로 갖는 오브젝트를 지니고 있는가?', () => {
      expect(distance.property.hasOwnProperty('distance'))
        .toBeTruthy();
  });

  test('거리의 업데이트가 가능한가?', () => {
      expect(cars.distance(name) === EXPECTED_DISTANCE).toBeTruthy();
  });

  test('특정 이름의 거리만 업데이트가 가능한가?', () => {
    expect(case1 !== case2).toBeTruthy();
  });
});
