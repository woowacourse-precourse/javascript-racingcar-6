import Car from '../../src/model/Car.js';

describe('Car', () => {
  let car;

  beforeEach(() => {
    car = new Car();
  });

  test('빈 데이터 맵으로 초기화 되어야 한다.', () => {
    // given
    // when
    const data = car.getData();

    // then
    expect(data).toBeInstanceOf(Map);
    expect(data.size).toBe(0);
  });

  test('name이 Map 객체에 빈문자열의 값을 가진 상태로 저장되어야 한다.', () => {
    // given
    // when
    car.saveNames('Car1,Car2,Car3');
    const data = car.getData();

    // then
    expect(data.get('Car1')).toBe('');
    expect(data.get('Car2')).toBe('');
    expect(data.get('Car3')).toBe('');
  });
});
