import Cars from '../src/Cars.js';

describe('사용자의 입력 값 테스트.', () => {
  test('각각의 이름은 쉼표로 구분 되어야 한다.', () => {
    const names = 'xldu,히구칸,12kim,chiKK';
    const cars = new Cars(names);
    cars.splitNamesByValue(',').forEach((name) => {
      expect(name).not.toContain(',');
    });
  });

  test('구분된 이름은 0이상 5자 이하여야 한다.', () => {
    const names = 'xldu,히구칸,12kim,choKK';
    const cars = new Cars(names);

    cars.splitNamesByValue(',').forEach((name) => {
      expect(name.length).toBeGreaterThan(0);
    });
  });

  test('구분된 이름이 0~5 사이의 이름이 아닐 경우 예외 처리', () => {
    const names = 'asdf,티비엔,asdfgd, hollo';
    const cars = new Cars(names);

    expect(() => cars.splitNamesByValue(',')).toThrow('[ERROR]');
  });
});
