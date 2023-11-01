import CarsInfo from '../../src/CarsInfo.js';


describe('자동차 객체는', () => {
  // given
  const EXPECTED_DISTANCE = '-';
  const INPUTS = ['pobi', 'navi', 'gori'];
  const carsInfo = new CarsInfo(INPUTS);
  
  test('생성된 이름의 갯수만큼의 크기를 지니는가?', () => {
    // then
    expect(carsInfo.names.length).toBe(INPUTS.length);
  });
  
  test('거리를 키로 갖는 오브젝트를 지니고 있는가?', () => {
    // then
    carsInfo.names.forEach((name) => {
      const distance = carsInfo.movingDistanceOfName(name);
      expect(distance).toBe('');
    });
  });

  test('거리의 업데이트가 가능한가?', () => {
    INPUTS.forEach((name) => {
      // when
      carsInfo.movingForwardSpecificName(name);
      const distance = carsInfo.movingDistanceOfName(name);

      // then
      expect(distance === EXPECTED_DISTANCE).toBeTruthy();
    });
  });

  test('특정 이름의 거리만 업데이트가 가능한가?', () => {
    // when
    carsInfo.movingForwardSpecificName('pobi');
    const distance1 = carsInfo.movingDistanceOfName('navi');
    const distance2 = carsInfo.movingDistanceOfName('pobi');

    // then
    expect(distance1 !== distance2).toBeTruthy();
  });
});
